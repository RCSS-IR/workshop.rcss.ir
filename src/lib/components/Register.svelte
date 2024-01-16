<script lang="ts">
  import Icon from "@iconify/svelte";
  import { gradeList } from "$lib/gradeList";
  import Loading from "$lib/components/Loading.svelte";
  import { Confetti } from "svelte-confetti";

  enum PageState {
    INIT = "INIT",
    CHECKING = "CHECKING",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
  }

  let errors = [];

  let showErrors = false;
  let registerState: PageState = PageState.INIT;

  interface ValidateFn {
    state: boolean;
    messages: string[];
  }

  let formFields = [
    {
      type: "text",
      id: "name",
      name: "نام و نام خانوادگی",
      icon: "akar-icons:person",
      touch: false,
      validate: (value: string): ValidateFn => {
        let state = false;
        let messages = [];

        if (value.length === 0) {
          messages.push("نام و نام خانوادگی نمی تواند خالی باشد.");
        }

        // only accept persian characters
        if (!/^[\u0600-\u06FF\s]+$/.test(value)) {
          messages.push("نام و نام خانوادگی باید فقط شامل حروف فارسی باشد.");
        }

        return {
          state: messages.length === 0,
          messages,
        };
      },
      errors: [],
      value: "",
    },
    {
      type: "email",
      id: "email",
      name: "جی میل",
      icon: "logos:google-gmail",
      touch: false,
      validate: (value: string): ValidateFn => {
        let state = false;
        let messages = [];

        if (value.length === 0) {
          messages.push("جی میل نمی تواند خالی باشد.");
        }

        // only accept gmail
        if (!/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value)) {
          messages.push("جی میل باید یک جی میل معتبر باشد.");
        }

        return {
          state: messages.length === 0,
          messages,
        };
      },
      errors: [],
      value: "",
    },
    {
      type: "tel",
      id: "phone",
      name: "موبایل",
      icon: "akar-icons:phone",
      touch: false,
      change: (e: any) => {
        // only  accept numbers and +
        if (e.key.length === 1 && !/^[0-9+]*$/.test(e.key)) {
          e.preventDefault();
        }
        return true;
      },
      validate: (value: string): ValidateFn => {
        let state = false;
        let messages = [];

        // only accept numbers and +
        if (!/^((98|\+98|0098|0)*(9)[0-9]{9})+$/.test(value)) {
          messages.push("شماره موبایل باید فقط شامل اعداد و + باشد.");
        }

        return {
          state: messages.length === 0,
          messages,
        };
      },
      errors: [],
      value: "",
    },
    {
      type: "select",
      id: "grade",
      inputType: "select",
      name: "پایه تحصیلی",
      icon: "mynaui:academic-hat",
      touch: false,
      validate: (value: string): ValidateFn => {
        let state = false;
        let messages = [];

        if (value.length === 0) {
          messages.push("پایه تحصیلی نمی تواند خالی باشد.");
        }

        return {
          state: messages.length === 0,
          messages,
        };
      },
      list: gradeList,
      errors: [],
      value: "",
    },
  ];

  function checkForm() {
    errors = [];
    formFields.forEach((field) => {
      field.errors = [];
      if (field.validate) {
        let result = field.validate(field.value);
        if (result.state === false) {
          field.errors = [...result.messages];
          errors.push(...result.messages);
        }
      }
    });
  }

  function firstSubmit() {
    checkForm();

    if (errors.length > 0) {
      alert("لطفا اطلاعات خود را به درستی وارد کنید.");
      showErrors = true;
      return;
    }

    registerState = PageState.CHECKING;
  }

  function submit() {
    registerState = PageState.LOADING;
    // send message a post message to /api/telegram
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formFields[0].value,
        email: formFields[1].value,
        phone: formFields[2].value,
        grade: formFields[3].value,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          formFields.forEach((field) => {
            field.value = "";
          });
          registerState = PageState.SUCCESS;
          return;
        }

        registerState = PageState.ERROR;
      })
      .catch((err) => {
        registerState = PageState.ERROR;
      });
  }
</script>

<div class="container m-auto">
  <div class="main-container" class:expand={registerState !== PageState.INIT}>
    {#if registerState === PageState.INIT}
      <div class="form-container">
        <h6 class="title">حالا ثبت نام کن</h6>

        <div class="description desc color-links">
          <p style="color: inherit; font-size: inherit; " class="px-2">
            کافیه اطلاعاتت رو وارد کنی تا ایمیل ثبت نام از طرف کمیته فنی برات ارسال بشه. فقط حتما
            <span class="text-red-700">حتما</span>
            <span class="text-red-900">حتما</span>
            Gmail (جی میل) خودتون رو وارد کنید.
          </p>
        </div>

        <div class="flex flex-col w-full px-2">
          {#each formFields as field}
            {#if field.type === "select"}
              <div class="w-full flex flex-row items-center">
                <span class=" w-40 ml-2">
                  {field.name}
                </span>
                <select
                  class="field-drop-down w-full input-group"
                  name=""
                  bind:value={field.value}
                  on:change={(e) => (field?.change ? field.change(e) : "") || checkForm()}
                  required
                >
                  <option value="" disabled selected hidden></option>
                  {#each field?.list as option}
                    <option value={option.value}>
                      {option.name}
                    </option>
                  {/each}
                </select>
              </div>
            {:else if field.type === "text"}
              <div class="field-text w-full input-group">
                <span class="icon">
                  <Icon icon={field.icon} />
                </span>
                <div class="input-sec w-full">
                  <input
                    type="text"
                    class="input"
                    placeholder=" "
                    name=""
                    on:keyup={(e) => (field?.change ? field.change(e) : "") || checkForm()}
                    bind:value={field.value}
                    required
                  />
                  <label>
                    {field.name}
                  </label>
                </div>
              </div>
            {:else if field.type === "email"}
              <div class="field-text w-full input-group">
                <span class="icon">
                  <Icon icon={field.icon} />
                </span>
                <div class="input-sec w-full">
                  <input
                    type="email"
                    class="input"
                    placeholder=" "
                    name=""
                    on:keyup={(e) => (field?.change ? field.change(e) : "") || checkForm()}
                    bind:value={field.value}
                    required
                  />
                  <label>
                    {field.name}
                  </label>
                </div>
              </div>
            {:else if field.type === "tel"}
              <div class="field-text w-full input-group">
                <span class="icon">
                  <Icon icon={field.icon} />
                </span>
                <div class="input-sec w-full">
                  <input
                    type="tel"
                    class="input"
                    placeholder=" "
                    name=""
                    on:keyup={(e) => (field?.change ? field.change(e) : "") || checkForm()}
                    bind:value={field.value}
                    required
                  />
                  <label>
                    {field.name}
                  </label>
                </div>
              </div>
            {/if}

            {#if showErrors}
              {#each field.errors as error}
                <div class="lead_errors">
                  <div class="error-message">
                    {error}
                  </div>
                </div>
              {/each}
            {/if}
          {/each}
        </div>
        <div class="fields-wrapper mt-4">
          <button type="submit" class="leads-submit__button leads-submit" on:click={firstSubmit}>ثبت نام</button>
        </div>
      </div>
    {:else if registerState === PageState.CHECKING}
      <div class="form-container">
        <h1>تایید ثبت نام</h1>
        <hr class="border-gray-700 mb-8" />

        {#each formFields as fields}
          <div class="field-text w-full input-group">
            <span class="icon">
              <Icon icon={fields.icon} />
            </span>
            <span class="text-gray-600">
              {fields?.value ?
                (fields.id !== "grade" ? fields.value : gradeList.find((item) => item.value === fields.value).name) ||
                "-"
              : "-"}
            </span>
          </div>
        {/each}

        <button class="leads-submit__button leads-submit" on:click={submit}>ارسال</button>
      </div>
      <div>
        <button
          class=" py-4 px-8 text-white rounded-xl bg-transparent hover:text-gray-300 font-extrabold"
          on:click={() => (registerState = PageState.INIT)}
        >
          <Icon icon="akar-icons:arrow-right" class="w-4 h-4 ml-2 inline-block" />
          بازگشت به فرم
        </button>
      </div>
    {:else if registerState === PageState.LOADING}
      <div class="form-container">
        <div class="flex flex-row justify-center items-center text-green-400">
          <Loading />
        </div>
        <h1>در حال ارسال</h1>
      </div>
    {:else if registerState === PageState.ERROR}
      <div class="form-container">
        <h1 class="error-title">مشکلی پیش آمد.</h1>
        <hr class="border-gray-700 mb-8" />
        <p class="text-gray-600 text-center">
          متاسفانه مشکلی در ارسال اطلاعات پیش آمد.
          <br />
          لطفا دوباره تلاش کنید.
        </p>
      </div>
      <div>
        <button
          class=" py-4 px-8 text-white rounded-xl bg-gray-600 hover:bg-gray-900 transition-colors font-extrabold"
          on:click={() => (registerState = PageState.INIT)}
        >
          <Icon icon="akar-icons:arrow-right" class="w-4 h-4 ml-2 inline-block" />
          بازگشت به فرم
        </button>
      </div>
    {:else if registerState === PageState.SUCCESS}
      <div
        style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
      >
        <Confetti
          x={[-5, 5]}
          y={[0, 0.1]}
          delay={[500, 2000]}
          infinite
          duration="5000"
          amount="200"
          fallDistance="100vh"
        />
      </div>
      <div class="form-container">
        <h1>با موفقیت انجام شد.</h1>
        <hr class="border-gray-700 mb-8" />
        <p class="text-gray-600 text-center">
          اطلاعات تماس با شما ذخیره شد.
          <br />
          بزودی با شما تماس خواهیم گرفت.

          <br />
          <span class="font-bold">
            برای اطمینان از دریافت آخرین اخبار و اطلاعات راجب دوره و کمیته فنی، در کانال تلگرامی ما عضو شوید.
          </span>
        </p>
        <div class="flex flex-row justify-center items-center gap-4 my-4">
          <a
            class="h-20 w-20 flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300 rounded-lg"
            href="https://t.me/SoccerSim2D"
          >
            <Icon icon="logos:telegram" class="w-8 h-8 rounded-md" />
            <p class="text-gray-600 pt-2">کانال تلگرام</p>
          </a>

          <a
            class="h-20 w-20 flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300 rounded-lg"
            href="https://t.me/SoccerSim2DGroup"
          >
            <Icon icon="logos:telegram" class="w-8 h-8 rounded-md" />
            <p class="text-gray-600 pt-2">گروه تلگرام</p>
          </a>
        </div>
      </div>
      <div>
        <button
          class=" py-4 px-8 text-white rounded-xl bg-gray-600 hover:bg-gray-900 transition-colors font-extrabold"
          on:click={() => (registerState = PageState.INIT)}
        >
          <Icon icon="akar-icons:cross" class="w-4 h-4 ml-2 inline-block" />
          بستن این صفحه
        </button>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  select {
    border-left: 10px solid white;
  }

  .main-container {
    @apply relative flex flex-col items-center rounded-none md:rounded-3xl p-2 md:p-5 drop-shadow-md;
    background-image: url("/img/morteza-bg.jpg");
    height: 500px;
    width: 100%;
    transition: height 200ms ease-in-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(255, 255, 255, 0.5);

    .form-container {
      @apply bg-white bg-opacity-50 rounded-3xl p-5 text-gray-700 shadow-2xl;
      width: 100%;
      max-width: 400px;

      h1 {
        @apply text-center my-8 bg-gradient-to-b font-extrabold text-3xl from-gray-500 to-gray-800 bg-clip-text text-transparent;
      }

      .error-title {
        @apply text-center my-8 bg-gradient-to-b font-extrabold text-3xl from-red-500 to-red-800 bg-clip-text text-transparent;
      }

      .title {
        @apply text-center my-8 bg-gradient-to-b font-extrabold text-3xl from-gray-500 to-gray-800 bg-clip-text text-transparent;
      }

      .description {
        @apply text-justify;
        margin-bottom: 33px;
        font-weight: 300;
      }

      .field-text {
        @apply w-full flex flex-row items-center;
        display: flex;
        flex-grow: 1;
        background-color: #fff;
        min-height: 40px;
        border-radius: 12px;
        padding: 0 12px;
        justify-content: start;
        align-items: center;
        margin-bottom: 8px;
        margin-left: 4px;
        margin-right: 4px;
        transition: all 0.2s ease-in-out;

        .icon {
          @apply text-xs  ml-4;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 10px;
        }
      }
    }
  }

  .expand {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-image: url("/img/morteza-bg-blur.jpg");
    border-radius: 0;
    @apply flex flex-col gap-4 justify-center items-center;

    .form-container {
      @apply bg-gray-200 bg-opacity-90 rounded-md p-5 text-gray-700 shadow-2xl;
    }
  }

  .container {
    padding: 0;
    min-height: 624px;
    height: fit-content;
    overflow: hidden;
  }

  .wrapper {
    height: 100%;
  }

  .fields-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  input:-webkit-autofill {
    -webkit-background-clip: text;
  }

  .input-sec {
    position: relative;
    width: 85%;
  }

  .input-sec label {
    color: rgba(0, 0, 0, 0.28);
    font-weight: normal;
    width: fit-content;
    font-size: 14px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 0;
    overflow: hidden;
    line-height: 1;
  }

  .input-sec input:not(:placeholder-shown) ~ label {
    display: none;
  }

  .field-text.error label {
    color: #e24151;
  }

  .field-text:focus-within {
    border: solid 1px rgba(0, 0, 0, 0.47);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  .field-text svg {
    margin-left: 8px;
    height: 1em;
    width: 1.3em;
  }

  .field-text svg * {
    fill: rgb(var(--fourth)) !important;
  }

  .field-text .input {
    width: 100%;
    min-height: 22px;
    color: #000;
    font-size: 14px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    z-index: 1;
    line-height: 2.3;
  }

  .field-text .input::placeholder {
    color: rgba(var(--fourth), 0.28);
  }

  .field-text .input:hover,
  .field-text .input:focus {
    border: none;
    outline: none;
  }

  .field-text-area {
    display: flex;
    margin-bottom: 8px;
    margin-left: 4px;
    margin-right: 4px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    min-height: 94px;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
  }

  .input-sec__textarea {
    position: relative;
    width: 85%;
  }

  .input-sec__textarea label {
    color: rgba(0, 0, 0, 0.28);
    font-weight: normal;
    width: fit-content;
    font-size: 14px;
    position: absolute;
    right: 0em;
    top: 0.5rem;
    cursor: pointer;
    z-index: 0;
    line-height: 1;
  }

  .input-sec__textarea textarea:not(:placeholder-shown) ~ label {
    display: none;
  }

  .input-sec__drop {
    position: relative;
    width: 80%;
  }

  .input-sec__drop label {
    color: rgba(0, 0, 0, 0.28);
    font-weight: normal;
    width: fit-content;
    font-size: 14px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 0;
    overflow: hidden;
    line-height: 1;
  }

  .input-sec__drop input:not(:placeholder-shown) ~ label {
    display: none;
  }

  .drop-down-content .scroll-section {
    max-height: 125px !important;
    overflow-y: auto;
    gap: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    scrollbar-width: thin;
    scrollbar-color: #e3e8f7 transparent;
  }

  .drop-down-content .scroll-section::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
    display: block !important;
  }

  .drop-down-content .scroll-section::-webkit-scrollbar-track {
    background: #f4f7fb;
    border-radius: 20px;
    margin-block: 12px;
  }

  .drop-down-content .scroll-section::-webkit-scrollbar-thumb {
    background: #e3e8f7;
    border-radius: 20px;
  }

  .checkbox-input {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }

  .checkbox-input label {
    cursor: pointer;
  }

  .checkbox-input input[type="checkbox"] {
    cursor: pointer;
    display: none;
  }

  .checkbox-input label::before {
    content: "";
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #dfe3ee;
    background-color: #fff;
    border-radius: 4px;
    display: block;
  }

  .checkbox-input input[type="checkbox"]:checked + label::before {
    background-color: rgb(var(--first));
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 3.5L2.5 5L6.5 1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e ");
    background-repeat: no-repeat;
    background-size: 8px;
    background-position: center;
  }

  .leads-submit__button {
    position: relative;
    width: 100%;
    outline: none;
    border: none;
    height: 40px;
    border-radius: 12px;
    font-size: 16px;
    background-color: #1d2025;
    color: #fff;
    margin: 0 4px 0 4px;
  }

  .leads-submit__button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .leads-submit__button:hover::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: rgba(29, 32, 37, 0.4);
    left: 0;
    top: 0;
  }

  .lead_errors .error-message {
    position: relative;
    color: rgba(255, 0, 0, 0.8);
    padding-right: 15px;
  }

  .lead_errors .error-message::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: rgba(255, 0, 0, 0.8);
    top: calc(50% - 5px);
    right: 0;
    border-radius: 50%;
  }

  .lead_errors .error-message:last-child {
    margin-bottom: 13px;
  }

  .field-text.error {
    border: solid 1px rgba(255, 0, 0, 0.8);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  .field-text.error svg * {
    color: rgba(255, 0, 0, 0.8) !important;
    fill: rgba(255, 0, 0, 0.8) !important;
  }

  .input-group {
    flex-wrap: nowrap;
    border: solid 1px #fff;
  }

  @media (max-width: 768px) {
    .field-text {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
    }

    .leads-submit__button {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  .field-text .input {
    width: 100%;
    min-height: 22px;
    color: #000;
    font-size: 14px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    z-index: 1;
    line-height: 2.3;
  }
</style>
