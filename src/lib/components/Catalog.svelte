<script>
    let images = [
        {
            path: '/img/catalog/catalog-1.jpg',
            alt: '2d-workshop-catalog-1'
        },
        {
            path: '/img/catalog/catalog-2.jpg',
            alt: '2d-workshop-catalog-2'
        },
        {
            path: '/img/catalog/catalog-3.jpg',
            alt: '2d-workshop-catalog-3'
        },
        {
            path: '/img/catalog/catalog-4.jpg',
            alt: '2d-workshop-catalog-4'
        },
        {
            path: '/img/catalog/catalog-5.jpg',
            alt: '2d-workshop-catalog-5'
        }
    ]
</script>

<div class="w-full">
    {#each images as image}
        <img width="100%" src={image.path} alt={image.alt} class="catalog">
    {/each}

    <div class="w-full flex flex-row my-4 justify-center items-center ">
        <a href="/img/catalog/catalog.pdf" class="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">
            دانلود کاتالوگ
        </a>
    </div>
</div>

<style lang="postcss">
    .catalog:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .catalog:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>