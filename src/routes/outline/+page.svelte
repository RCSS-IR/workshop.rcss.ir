<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Catalog from "$lib/components/Catalog.svelte";
</script>

<div class="w-full h-full flex flex-col">
    <Header/>
    <main class="container mx-auto flex-grow my-16 ">
        <Catalog/>
    </main>
    <Footer/>
</div>
