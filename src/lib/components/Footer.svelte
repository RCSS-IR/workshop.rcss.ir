<script>
    import Icon from '@iconify/svelte';
    export let title = 'لیگ شبیه ساز دوبعدی فوتبال';
    export let description = 'شبیه‌سازی دوبعدی فوتبال همانطور که از نام آن پیداست، فضاییست شبیه‌سازی شده از فوتبال واقعی که محدود به دو بعد ( x و y ) است. این محیط شبیه‌سازی، یکی از پلتفورم‌های مسابقاتی مسابقات روبوکاپ است که هر ساله در ایران و جهان برگزار می‌شود.';
    export let websiteUrl = 'rcss.ir';

    let pages = [
        {
            title: 'صفحه اصلی',
            icon: "akar-icons:home",
            url: '/',
        },
        {
            title: 'درباره ما',
            icon: "akar-icons:info",
            url: '/about',
        },
        {
            title: 'طرح درس',
            icon: "akar-icons:book",
            url: '/outline',
        },
        {
            title: 'تماس با ما',
            icon: "akar-icons:phone",
            url: '/contact',
        }
    ];

    let socials = [
        {
            title: 'آپارات',
            icon: "akar-icons:youtube-fill",
            url: 'https://www.aparat.com/RCSS.IR',
        },
        {
            title: 'کانال تلگرام اطلاع رسانی',
            icon: "akar-icons:telegram-fill",
            url: 'https://t.me/RCSS_IR',
        },
        {
            title: 'گروه تلگرام',
            icon: "akar-icons:telegram-fill",
            url: 'https://t.me/RCSS_IR',
        },
        {
            title: 'کانال یوتیوب',
            icon: "akar-icons:youtube-fill",
            url: 'https://www.youtube.com/RCSS.IR',
        }
    ]

</script>

<div class="container mx-auto flex justify-center">
    <div class="flex flex-col bg-green-950 rounded-t-[20px] px-0 pb-6 pt-6 md:px-[15px] relative text-right">
        <div class="flex flex-wrap flex-col-reverse gap-4 md:flex-row md:flex-nowrap px-2 md:px-8">

            <div class="text-white  min-w-60 pt-5 md:pt-6 px-5 md:px-0">
                <h5 class="text-white font-semibold text-[14px] mb-[15px] relative pr-[15px]">
                    شبکه‌های اجتماعی
                    <span class="absolute top-[3px] right-[-1px] w-[8px] h-[8px] rounded-full bg-green-600" />
                </h5>
                <ul class="flex flex-col  gap-2 justify-center items-center">
                    {#each socials as social}
                        <li class=" flex w-full flex-row w-40">
                            <Icon icon={social.icon} class="w-[16px] h-[16px] object-contain ml-[10px] mt-[5px]" />
                            <a href={social.url} class="text-white text-[14px] pt-1 text-xs hover:text-green-600 transition-all duration-200">
                                {social.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="text-white min-w-60 md:pt-6 px-5 md:px-0">
                <h5 class="text-white font-semibold text-[14px] mb-[15px] relative pr-[15px]">
                    صفحات
                    <span class="absolute top-[3px] right-[-1px] w-[8px] h-[8px] rounded-full bg-green-600" />
                </h5>
                <ul class="flex flex-col gap-2 justify-center items-center">
                    {#each pages as page}
                        <li class=" flex w-full flex-row w-40">
                            <Icon icon={page.icon} class="w-[16px] h-[16px] object-contain ml-[10px] mt-[5px]" />
                            <a href={page.url} class="text-white text-[14px] pt-1 text-xs hover:text-green-600 transition-all duration-200">
                                {page.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="flex-grow md:w-5/12 px-[22px] mb-[50px] md:mb-0">
                <h5 class="text-white font-semibold text-[14px] mb-[15px] relative pr-[15px]">
                    {title}
                    <span class="absolute top-[3px] right-[-1px] w-[8px] h-[8px] rounded-full bg-green-600" />
                </h5>
                <div class="text-white text-[12px] leading-8 rtl">
                    {description}
                </div>
            </div>
        </div>
        <hr class=" border-green-900 mt-8 mx-4">
        <span class=" mt-4 text-center text-xs text-white mx-4">
            ساخته شده با
            <span class="text-red-600">❤</span>
            برای شما
            توسط اعضای جامعه‌ی
            <a href="https://rcss.ir" target="_blank" rel="noopener noreferrer" class="text-green-600 font-bold">
                شبیه‌سازی دوبعدی فوتبال
            </a>
        </span>
    </div>
</div>

<style>
</style>
