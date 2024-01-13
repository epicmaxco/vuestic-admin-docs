<template>
  <div class="flex py-10 md:py-[120px] justify-center">
    <div class="flex flex-col gap-6 md:gap-10 w-full max-w-7xl">
      <h2 class="text-extraMedium md:text-extraLarge font-extrabold">Core Features</h2>
      <div class="text-regularLarge max-w-[640px]">
        A robust admin template utilizing Vue 3, Vite, Pinia, and Tailwind CSS. It's a modern, MIT-licensed template designed for building efficient, responsive, and fast-loading admin interfaces. Tailored to speed up development, Vuestic Admin integrates the latest web technologies for a seamless experience.
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex flex-col gap-4">
            <IconsStar />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Vue 3 + Vite</h3>
              <p>Fast and efficient development</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsMoon />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Dark theme</h3>
              <p>Modern and eye-catching</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsFilter />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Global Configuration</h3>
              <p>Effortless customization</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex flex-col gap-4">
            <IconsMan />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Accessibility</h3>
              <p>Inclusive and user-friendly</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsComponents />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">i18n Integration</h3>
              <p>Easy localization for global reach</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsGraduationCap />
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Educational Resource</h3>
              <p>Ideal for learning and improving skills</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex flex-col gap-4">
            <IconsPhone/>
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Responsive Design</h3>
              <p>Adapts seamlessly to all devices</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsSupport/>
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Professional Support</h3>
              <p>Reliable help from the experts</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <IconsCutomizable/>
            <div class="flex flex-col gap-2 text-regularLarge">
              <h3 class="font-bold">Highly Customizable</h3>
              <p>Tailor to your project’s style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>