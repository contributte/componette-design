<template>
  <div>
    <xheader/>
    <Nuxt/>
    <xfooter/>
  </div>
</template>

<script>
import Xheader from "@/layouts/components/header.vue";
import Xfooter from "@/layouts/components/footer.vue";

export default {
  components: {
    Xheader,
    Xfooter,
  },
};
</script>
