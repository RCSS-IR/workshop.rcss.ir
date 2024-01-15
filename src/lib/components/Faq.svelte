<script lang="ts">
  import SectionTitle from "$lib/components/SectionTitle.svelte";

  let questions = [
    {
      id: 0,
      question: "هزینه ثبت نام دوره چقدر هست؟",
      answer: "این دوره کاملا رایگان هست و هیچ هزینه ای برای شرکت در کلاس ها دریافت نمیشه",
      open: false,
    },
    {
      id: 1,
      question: "آیا گواهی حضور در دوره صادر میشه؟",
      answer:
        "بله. کمیته برگزاری برای افرادی که در کلاس ها شرکت کردن و امتیاز های لازم رو توی امتحان ها بدست آوردن گواهی شرکت در دوره صادر میکنه",
      open: false,
    },
    {
      id: 2,
      question: "دوره آنلاین هست یا حضوری؟",
      answer: "در حال حاضر دوره به صورت آنلاین طراحی شده",
      open: false,
    },
    {
      id: 3,
      question: "دوره مناسب چه افرادی هست؟",
      answer:
        "هدف این دوره دانش آموزانی هست که به برنامه نویسی علاقمند هستن و میخوان وارد لیگ شبیه ساز دوبعدی فوتبال در مسابقات ربوکاپ بشن",
      open: false,
    },
    {
      id: 4,
      question: "تو دوره چه مباحثی آموزش داده میشه؟",
      answer:
        "1- مقدمه<br><br>" +
        "2- مبانی کامپیوتر<br><br>" +
        "3- مبانی الگوریتم و برنامه نویسی<br><br>" +
        "4- مبانی شبیه‌سازی دوبعدی فوتبال<br><br>" +
        "5- آموزش BaseAgent<br><br>" +
        "6- آموزش هوش مصنوعی",
      open: false,
    },
  ];

  function toggleQuestion(id: number) {
    questions = questions.map((q) => ({
      ...q,
      open: q.id === id ? !q.open : false,
    }));
  }
</script>

<section class="flex flex-col container items-center my-12">
  <SectionTitle title="سوالات متداول" />

  <div class="w-full flex flex-col gap-4 px-0 md:px-16" id="faqone-faq">
    {#each questions as question (question.id)}
      <div class="bg-white rounded shadow">
        <button
          class="flex justify-between items-center w-full p-4 focus:outline-none"
          on:click={() => toggleQuestion(question.id)}
        >
          <span class="font-semibold {question.open ? ' text-yellow-600 ' : 'text-gray-600'}">
            {question.question}
          </span>
          <span>
            {question.open ? "-" : "+"}
          </span>
        </button>
        {#if question.open}
          <div class="p-4 border-t text-sm">
            <p class="leading-relaxed text-right">
              {@html question.answer}
            </p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  .leading-relaxed {
    direction: rtl;
  }
</style>
