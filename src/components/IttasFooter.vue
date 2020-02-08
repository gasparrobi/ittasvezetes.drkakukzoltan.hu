<template>
  <footer class="section">
    <div class="section-inner">
      <p>Ezt a honlapot <span>dr. Kakuk Zoltán Dániel</span> egyéni ügyvéd (Budapesti Ügyvédi Kamara, nyilvántartási szám: 01-052283) tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a www.magyarugyvedikamara.hu honlapon találhatóak.</p>
      <p>Copyright ©{{ currentYear }} - <span>dr. Kakuk Zoltán Dániel</span> - Minden jog fenntartva!</p>
      <p>Design & Development by <a target="_blank" href="https://www.linkedin.com/in/gasparrobi/">Robert Gaspar</a></p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'IttasFooter',

  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background: #4B4B4B;

  &-inner {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: #B7B7B7;
    padding: 30px 0;
    text-align: center;

    p {
      margin: 5px 0;
    }

    span {
      color: #fff;
    }

    a {
      color: rgb(230, 230, 230);
      text-decoration: underline;
      transition: all 300ms;

      &:hover {
        color: #fff;
      }
    }
  }
}

</style>