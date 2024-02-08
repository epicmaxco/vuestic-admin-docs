<template>
  <div class="docs-team grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 -mb-4 mt-8">
    <div
      v-for="item in team"
      :key="item.image"
      class="docs-team__avatar-wrapper mb-8"
    >
      <VaAvatar
        :size="146"
        class="docs-team__avatar"
      >
        <img
          :src="item.image"
          :alt="item.name"
          height="140"
          width="140"
        >
      </VaAvatar>
      <strong class="mt-3 mb-1">{{ item.name }}</strong>
      <div class="text-center">{{ item.jobTitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AndreiImage from './images/andrei.jpg'
import YauheniImage from './images/jenia.jpg'
import MaksimImage from './images/maksim.jpg'
import VitalyImage from './images/vitalik.jpg'
import RomanImage from './images/roman.png'
import AnastasiiaImage from './images/anastasiia.png'
import VasiliImage from './images/vasili.png'

const team = [
  {
    name: 'Andrey Hrabouski',
    jobTitle: 'CEO - Epicmax',
    image: AndreiImage,
  },
  {
    name: 'Yauheni Prakopchyk',
    jobTitle: 'CTO - Vuestic UI/Admin',
    image: YauheniImage,
  },
  {
    name: 'Maksim Nedoshev',
    jobTitle: 'Lead Developer - Vuestic UI/Admin',
    image: MaksimImage,
  },
  {
    name: 'Vitaly Raichev',
    jobTitle: 'Developer - Vuestic UI/Admin',
    image: VitalyImage,
  },
  {
    name: 'Roman Babalici',
    jobTitle: 'Developer - Vuestic UI/Admin',
    image: RomanImage,
  },
  {
    name: 'Anastasiia Zvenigorodskaia',
    jobTitle: 'Marketing Strategy - Epicmax/Vuestic',
    image: AnastasiiaImage,
  },
  {
    name: 'Vasili Savitski',
    jobTitle: 'Designer - Vuestic UI/Admin',
    image: VasiliImage,
  },
]
</script>

<style lang="scss">
.docs-team {
  &__avatar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__avatar {
    padding: 3px;
    background:
      linear-gradient(
        108.62deg,
        #e9439d,
        #e5419e,
        #9e23b2 100%,
        #ffffff
      )
      border-box;
    -webkit-mask:
      linear-gradient(
        108.62deg,
        #e9439d,
        #e5419e,
        #9e23b2 100%,
        #ffffff
      )
      padding-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border: 4px solid white;
    }
  }

  .fa-github {
    color: var(--va-on-background-primary);
  }

  .fa-facebook {
    color: #3b5998;
  }

  .fa-twitter {
    color: rgba(29, 161, 242, 1);
  }
}
</style>
