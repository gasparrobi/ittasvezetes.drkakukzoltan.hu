<template>
  <section id="elerhetosegeim" data-observe="observe" class="section">
    <div class="section-inner">
      <h1 class="title">Elérhetőségeim</h1>
      <div class="contact-wrapper">
        <div class="box">
          <h2 class="description">Iroda cím</h2>
          <address class="content">
            <p>1055 Budapest</p>
            <p>Szent István körút 17.</p> 
            <p>3. emelet 4. ajtó (kapucsengő: 58)</p>
          </address>
        </div>
        <div class="box">
          <h2 class="description">Hívjon bizalommal</h2>
          <p><a href="tel:+36304322665">+36 30 432 2665</a></p>
        </div>
        <div class="box">
          <h2 class="description">Írjon email-t</h2>
          <p><a href="mailto:iroda@drkakukzoltan.hu">iroda@drkakukzoltan.hu</a></p>
        </div>
      </div>
    </div>
  </section>  
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.section {
  margin: 60px 0;
}

.contact-wrapper {
  display: flex;
  align-items: center;
  margin: 30px 0 0;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}

.box {
  flex: 1 0 1%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 10px;
  min-height: 150px;
  min-width: 290px;
  border: 5px solid;
  background: #fff;
  border: 5px solid #949494;
  box-shadow: 0px 15px 22px 2px rgba(0,0,0,.1);

  @include break(phablet) {
    min-height: 60px;
  }

  h2 {
    color: #2C3E50;
    text-transform: uppercase;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
  }

  a {
    text-decoration: underline;
  }
}
</style>