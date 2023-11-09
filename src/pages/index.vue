<template>
<div class="hero" :style="{ 'min-height': screenHeightWitoutNavbar }">
  <div class="hero-content text-center">
    <div class="max-w-4xl mx-auto mt-12">
      <h1 data-aos="zoom-in" class="text-5xl md:text-6xl font-bold mb-6">Collaborative Health Records for Pediatricians & Moms</h1> <!-- Adjusted text size -->
      <p data-aos="zoom-in" data-aos-delay="300" class="md:text-lg mb-6">Discover the Super Easy Way to Manage & Share Medical Records.
        <br>Fortified with Security, Privacy, Auditability & Generative AI.</p>
      <div class="flex justify-center space-x-5">
        <!-- <a
          data-aos="zoom-in"
          data-aos-delay="600"
          class="btn btn-sm md:btn-md btn-primary"
          href="https://github.com/mycurelabs/nuxt-tailwind-template/fork"
          target="_blank"
        >
          See Demo
        </a> -->
        <a
          data-aos="zoom-in"
          data-aos-delay="600"
          class="btn btn-sm md:btn-md btn-primary btn-outline"
          href="https://roe5vrdv9nl.typeform.com/to/AGbIDnSw"
          target="_blank"
        >
          Join the Waitlist
        </a>
      </div>
      <!-- Images row with its own width -->
      <div class="max-w-xl mx-auto mt-6">
  <div class="flex">
    <div class="w-1/2 pr-2" data-aos="zoom-in">
      <img src="../assets/images/easy-joey-pink.png" alt="Burger" class="w-full rounded" />
    </div>
    <div class="w-1/2 pl-2" data-aos="zoom-in">
      <img src="../assets/images/easy-joey-yellow.png" alt="Burger" class="w-full rounded" />
    </div>
  </div>
  <div class="flex mt-2">
    <div class="w-1/2 pr-2" data-aos="zoom-in">
      <img src="../assets/images/easy-joey-green.png" alt="Burger" class="w-full rounded" />
    </div>
    <div class="w-1/2 pl-2" data-aos="zoom-in">
      <img src="../assets/images/easy-joey-blue.png" alt="Burger" class="w-full rounded" />
    </div>
  </div>
</div>
<!-- End Images row with its own width -->
    </div>
  </div>
</div>




<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">GROW your practice.</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in">Experience a transformed pediatric care with a robust health 
      system. Streamlined processes let you focus on your passion – caring for kids. With more time and an organized system, 
      you can grow your practice, welcome more families, and create a thriving, joyful environment!</p>
    <!-- Center justified image -->
    <img 
      src="../assets/images/easy-joey-grow.png" 
      alt="Your Image Description" 
      class="max-w-xl mx-auto mt-4 rounded w-[100%]" 
      data-aos="zoom-in" />
  </div>
</generic-panel>


<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">Build lasting RELATIONSHIPS.</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in">Fostering strong connections and loyalty is seamless. 
      Effortlessly share vaccination charts, growth milestones, and developmental progress with parents. 
      This smooth communication not only builds trust but also creates a connected and engaged community. 
      It's more than just care; it's about nurturing a supportive and loyal healthcare family.</p>
    <!-- Center justified image -->
    <img src="../assets/images/easy-joey-better.png" alt="Your Image Description" class="max-w-xl mx-auto mt-4 rounded w-[100%]" data-aos="zoom-in" />
  </div>
</generic-panel>

<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">Hello, EasyJoey.</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in"></p>
    <!-- Center justified video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="max-w-3xl mx-auto mt-4 rounded border border-gray-800 w-[100%]"
    >
      <source src="../assets/videos/easy-joey-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</generic-panel>



<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">Privacy-First Collaborative & Generative Medical Records</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in">EasyJoey is not your typical health records system. Unlike traditional ones that are siloed, hard to use, and lack privacy, 
      EasyJoey stands out. It securely shares medical records, without compromising data privacy, ownership, and auditability. 
      
      <br><br>EasyJoey CARES: <br>Collaborative, Auditable, Rights to Data, Encrypted, and Smart. </p>
    <!-- Center justified images with text -->
    <div class="flex flex-col md:flex-row justify-center mt-4 gap-4">
      <div class="flex flex-col">
        <div class="flex justify-center h-[150px]">
          <img src="../assets/images/easy-joey-c.png" alt="Your Image Description" class="rounded h-[100%]" data-aos="zoom-in" />
        </div>
        <h2 class="text-lg font-bold mt-2">Collaborative</h2>
        <p class="text-sm">Simplified medical record sharing. With just a few clicks, you securely manage and share records with patients and colleagues. It's FHIR API compliant for efficient data use by other facilities and offers versatile health APIs for seamless integration.</p>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-center h-[150px]">
          <img src="../assets/images/easy-joey-a.png" alt="Your Image Description" class="rounded h-[100%]" data-aos="zoom-in" />
        </div>
        <h2 class="text-lg font-bold mt-2">Auditable</h2>
        <p class="text-sm">On top of privacy compliance, it's 'Record-Centric' approach and granular access control allows sharing with the right parties without compromising confidentiality. All actions are auditable for added security.</p>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-center h-[150px]">
          <img src="../assets/images/easy-joey-r.png" alt="Your Image Description" class="rounded h-[100%]" data-aos="zoom-in" />
        </div>
        <h2 class="text-lg font-bold mt-2">Rights to Data</h2>
        <p class="text-sm">Ownership is paramount, granting users, including patients and physicians, data control. System goes offline? No problem. EasyJoey ensures seamless offline access to patient data, guaranteeing uninterrupted tasks.</p>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-center h-[150px]">
          <img src="../assets/images/easy-joey-e.png" alt="Your Image Description" class="rounded h-[100%]" data-aos="zoom-in" />
        </div>
        <h2 class="text-lg font-bold mt-2">Encrypted</h2>
        <p class="text-sm">EasyJoey optimizes security with end-to-end encryption, safeguarding your data like a private lockbox. Only authorized collaborators can access it; even our admin has no key. Patient records remain secure, with each encounter independently fortified for privacy.</p>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-center h-[150px]">
          <img src="../assets/images/easy-joey-s.png" alt="Your Image Description" class="rounded h-[100%]" data-aos="zoom-in" />
        </div>
        <h2 class="text-lg font-bold mt-2">Smart</h2>
        <p class="text-sm">Over 50% of EMR patient notes are simply copied & pasted from others (half of Shakespeare’s Hamlet!). EasyJoey leverages generative AI to summarize medical history. Also, its AI optimizes Clinical Decision Support (CDS) and aids dictation.</p>
      </div>
    </div>
  </div>
</generic-panel>



<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">Super EASY to Use.</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in">EasyJoey redefines user-friendliness with its intuitive interface, 
      empowering you to effortlessly manage health records. Say goodbye to steep learning curves and wasted time on training 
      and frustration. With EasyJoey, you can learn to create a medical record encounter in just 10 minutes (or less!).</p>
    <!-- Center justified image -->
    <img src="../assets/images/easy-joey-easy.png" alt="Your Image Description" class="max-w-xl mx-auto mt-4 rounded w-[100%]" data-aos="zoom-in" />
  </div>
</generic-panel>

<generic-panel class="flex items-center" data-aos="zoom-in">
  <div class="max-w-4xl mx-auto mt-12 text-center">
    <h1 class="text-3xl md:text-5xl mb-5" data-aos="zoom-in">Amazingly Fast.</h1>
    <p class="md:text-lg max-w-xl mx-auto" data-aos="zoom-in">EasyJoey achieves blazing-fast performance through a powerful 
      blend of WebAssembly (WASM), CRDT, and our exclusive Syncpony technology. This unique combination ensures seamless 
      data access whether you're online or offline, all thanks to synchronization through a local database. 
      The result? Remarkable speed!</p>
    <!-- Center justified image -->
    <img src="../assets/images/easy-joey-fast.png" alt="Your Image Description" class="max-w-xl mx-auto mt-4 rounded w-[100%]" data-aos="zoom-in" />
  </div>
</generic-panel>


<generic-panel>
    <div class="flex flex-col justify-center items-center mx-4 my-6 md:mx-8 md:my-10 lg:my-12 p-4 md:p-8 bg-gray-50 rounded-2xl">
      <img src="../assets/images/easy-joey-logo-black.png" alt="EasyJoey Logo" class="h-12 w-12">
      <h1 data-aos="fade-up" class="text-xl md:text-2xl font-primary
        text-gray-900 mb-2 mt-5 text-center">Join the Community.
      <br>Let's Conquer the Holy Grail of Health Data:</h1>
        <h1 data-aos="fade-up" class="text-xl md:text-2xl font-primary
        text-gray-900 mb-2 text-center">Making Medical Records Shareable Without
        <br>Compromising Security, Ownership, and Privacy.</h1>
        <br>
      <h2 data-aos="fade-up" class="text-base md:text-lg font-normal font-primary text-center
        text-gray-500 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mb-4 md:mb-6 lg:mb-8">
       EasyJoey is currently invite-only. If someone you know is already enjoying EasyJoey, they can invite you.
        <br><br>If you're eager to experience the future of medical records management but aren't connected yet, no worries. 
        <br><br>We're releasing MORE INVITES soon, so secure your spot by signing up for the waitlist. 
        <br><br>Thank you for your interest and patience!
      </h2>
      <a href="https://roe5vrdv9nl.typeform.com/to/AGbIDnSw" target="_blank" class="btn">Apply for Early Access!</a>
    </div>
  </generic-panel>





  <generic-panel>
    <div class="flex flex-col">
      <footer class="footer p-10 text-base-content">
        <div>
          <span class="footer-title">Headquarters</span>
          <a>California HQ <br>44 Montgomerry Street San Francisco, CA</a>
          <a>Manila HQ <br>TKC Square Manila, Philippines</a>
      
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About Us</a>
          <a class="link link-hover">hello@easyjoey.com</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t text-base-content border-base-300">
        <div class="items-center grid-flow-col">
  <img src="../assets/images/easy-joey-logo-black.png" alt="EasyJoey Logo" class="h-8 w-8"> <!-- Adjust the path and size accordingly -->
  <p>EasyJoey <br/>Making Healthcare Data Easily Accessible to All.</p>
</div>

        <div class="md:place-self-center md:justify-self-end">
  <div class="grid grid-flow-col gap-4">
    <a href="https://twitter.com/easyjoey_" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
  </div>
</div>

      </footer>
    </div>
  </generic-panel>

 

</template>

<script>
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/nuxtwind-daisy-og-banner.jpg';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: 'EasyJoey',
      description: 'EasyJoey is a Collaborative (and Generative) Health Records App for Pediatricians and Moms.',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
        },
      ],
    });

    const screenHeightWitoutNavbar = computed(() => {
      return `calc(100vh - ${76}px)`;
    });

    return {
      screenHeightWitoutNavbar,
    };
  },
};
</script>
