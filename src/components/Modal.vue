<template>
<div class="modal-mask">
  <div class="modal-wrapper">
    <div class="modal-container">

      <div class="modal-header title">
        {{ headerLabel }}
      </div>

      <div class="modal-body">
         {{ bodyLabel }}
      </div>

      <div class="modal-footer">

        <button class="modal-default-button" @click="$emit('close')">
          Bezárás
        </button>

      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Modal',

  props: {
    headerLabel: {
      type: String,
      required: true
    },

    bodyLabel: {
      type: String,
      required: true
    }
  }
    
}
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: block;
  width: 100%;
}

.modal-container {
  width: 90%;
  max-width: 600px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header {
  padding: 30px 50px;

  @include break(mobile) {
    padding: 30px 30px;
  }
}

.modal-header h3 {
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  padding: 10px 50px;

  @include break(mobile) {
    padding: 10px 30px;
  }
}

.modal-footer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px 50px;

  @include break(mobile) {
    padding: 30px 30px;
  }

  button {
    padding: 20px 30px;
    display: flex;
    width: 100%;
    max-width: 380px;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #E04F5D;
    border-radius: 6px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    margin: 10px 0;
    transition: all 200ms;
    user-select: none;

     @include break(mobile) {
        font-size: 18px;
        padding: 20px;
      }

    &:hover {
      box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 1);
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>