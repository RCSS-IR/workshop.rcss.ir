<script>
  import Header from "$lib/components/Header.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Story from "$lib/components/Story.svelte";
  import Team from "$lib/components/Team.svelte";
  import Features from "$lib/components/Features.svelte";
  import Path from "$lib/components/Path.svelte";
  import Register from "$lib/components/Register.svelte";
  import Organizer from "$lib/components/Organizer.svelte";
  import Faq from "$lib/components/Faq.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import IntroVideo from "$lib/components/IntroVideo.svelte";
  import When from "$lib/components/When.svelte";
</script>

<svelte:head>
  <title>دوره‌ی آموزشی لیگ شبیه ساز دوبعدی فوتبال - صفحه‌ی اصلی</title>
</svelte:head>

<div class="w-full flex flex-col gap-4">
  <Header />
  <Intro />
  <Story />
  <IntroVideo />
  <Team />
  <Features />
  <Path />
  <Register />
  <Organizer />
  <Faq />
  <Footer />
</div>
