<template>
  <div class="contact">
    <Header :plural="true" title="Contact" subtitle="get in touch!" />
    <p class="information">
      You should receive a reply within 1 - 3 business days after you've sent
      the message. Please, make sure to read the terms and conditions on the
      <a href="/commissions">Commissions page</a>. Any message that violates
      them will be
      considered spam.
    </p>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      @submit.prevent="handleSubmit"
    >
      <div class="inputs">
        <p class="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <div
          class="input-container"
          :class="{ invalid: isEmailInvalid, filled: formData.email !== '' }"
        >
          <input type="email" name="email" v-model="formData.email" />
          <label for="email">Your email:</label>
          <p>{{ emailError }}</p>
        </div>
        <div
          class="input-container"
          :class="{
            invalid: isMessageInvalid,
            filled: formData.message !== '',
          }"
        >
          <textarea name="message" v-model="formData.message" />
          <label for="message">Message:</label>
          <p>{{ messageError }}</p>
        </div>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <CommonButton
        :disable-conditions="
          formData.email === '' ||
          formData.message === '' ||
          isEmailInvalid ||
          isMessageInvalid
        "
        type="submit"
        @click="handleSubmit"
      >
        Send
      </CommonButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import Header from "@/components/Header/Header.vue";
import CommonButton from "@/components/Buttons/CommonButton.vue";

export default defineComponent({
  name: "ContactView",
  components: { Header, CommonButton },

  setup() {
    const formData = ref({
      email: "",
      message: "",
    });

    const emailError = ref("Please, type an email");
    const messageError = ref("Please, type a message");
    const isEmailInvalid = ref(false);
    const isMessageInvalid = ref(false);

    /** Checks if email is valid and returns appropriate error message */
    const checkEmail = (email: string) => {
      const regex = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      );

      if (!email.toLowerCase().match(regex) || email === "") {
        isEmailInvalid.value = true;
        return "Please, type a valid email.";
      } else {
        isEmailInvalid.value = false;
        return "Please, type an email";
      }
    };

    /** Checks if message is valid and returns appropriate error message */
    const checkMessage = (message: string) => {
      if (message === "") {
        isMessageInvalid.value = true;
        return "Message cannot be empty";
      } else {
        isMessageInvalid.value = false;
        return "";
      }
    };

    watch(formData.value, async (newValue) => {
      if (newValue) {
        emailError.value = checkEmail(newValue.email);
        messageError.value = checkMessage(newValue.message);
      }
    });

    const encode = (data: any) => {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    };

    const handleSubmit = () => {
      console.log(encode({ "form-name": "contact", ...formData.value }));
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData.value }),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };

    return {
      emailError,
      formData,
      handleSubmit,
      isEmailInvalid,
      isMessageInvalid,
      messageError,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.contact {
  padding: 3.75rem 1.5rem 3rem;
	min-height: 92vh;

  .hidden {
    display: none;
  }

  .information {
    text-align: center;
    margin-bottom: 2rem;
	  a{
		  color: $bc-magenta;
	  }
  }

  form {
    width: 100%;

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      .input-container {
        width: 100%;
        position: relative;

        label {
          position: absolute;
          display: flex;
          align-items: center;
          top: 0.75rem;
          left: 1rem;
          pointer-events: none;
          color: #c0c0c0;
          transition: all 0.15s ease-out;
        }

        input,
        textarea {
          height: 3rem;
          min-width: 17.5rem;
          width: 100%;
          border: 1px solid #c0c0c0;
          border-radius: 4px;
          box-sizing: border-box;
          padding: 16px;

          &:focus {
            outline: none;
            border: 2px solid $bc-cyan;
          }

          &:focus + label {
            font-size: 0.75rem;
            transform: translate(0, -115%);
            background-color: white;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            color: $bc-cyan;
          }
        }

        textarea {
          height: 9rem;
          resize: none;
        }

        p {
          font-size: 0.8rem;
          color: $bc-gray;
          opacity: 0.85;
          text-align: left;
          padding: 0.3125rem;
        }
      }
    }

    .invalid {
      input,
      textarea {
        border: 1px solid #d10000;
      }

      p,
      label {
        color: #d10000;
      }
    }

    .filled {
      label {
        font-size: 0.75rem;
        transform: translate(0, -115%);
        background-color: white;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
    }
  }
}

/* Tablet */
@media (min-width: $tablet) {
  .contact {
	  min-height: 85vh;
    .information {
      text-align: left;
      margin: 0 3rem 2rem;
    }

    form {
      width: 100%;
      padding: 0 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .inputs {
        flex-direction: row;
        justify-content: space-between;

        .input-container {
          width: 32%;

          &:last-child {
            width: 66%;
          }

          textarea {
            height: 6rem;
          }
        }
      }
    }
  }
}
</style>
