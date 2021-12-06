<template>
  <div id="login">
    <vue-particles color="#1A814C"></vue-particles>

    <div class="login">
      <BaseOverlay :show="loader">
        <div class="">
          <div class="card border shadow-lg p-0">
            <div class="card-header bg-transparent border-0 pt-5 px-5">
              <div class="d-flex justify-content-center">
                <img
                  class="card-img-top"
                  src="../../assets/img/logo.jpg"
                  alt="Card image cap"
                />
              </div>
              <h1 class="text-uppercase">login</h1>
            </div>
            <div class="card-body px-5">
              <form @submit.prevent="authenticate(form)">
                <div class="mb-5">
                  <BaseInput
                    :type="'email'"
                    v-model="form.email"
                    :name="'Email'"
                    :label="'Email'"
                    :icon="'mail'"
                  />
                </div>

                <div class="">
                  <BaseInput
                    :type="'password'"
                    v-model="form.password"
                    :name="'Password'"
                    :label="'Password'"
                  />
                </div>
                <p class="text-uppercase text-center mt-4">
                  Forgot your password
                </p>
                <div class="card-footer border-0 mt-4">
                  <button class="w-100 btn" type="button">
                    help and support
                  </button>
                  <button class="w-100 btn" type="button" @click="authenticate">sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </BaseOverlay>
    </div>
    <BaseToast :label="msg" :showSnackbar="showSnackbar" />
  </div>
</template>

<script>
import BaseToast from "../../components/partials/_toast.vue";
import BaseInput from "../../components/forms/_input.vue";
import BaseOverlay from "../../components/partials/_overlay.vue";
export default {
  name: "login",
  components: {
    BaseInput,
    BaseOverlay,
    BaseToast,
  },

  data() {
    return {
      loader: false,
      form: {},
      msg: "",
      showSnackbar: false,
    };
  },

  methods: {
    async authenticate(data) {
      this.$router.push("/portal");
      this.loader = true;
      try {
        const response = await this.$AuthService.login(data);
        this.$LocalStorage.set("token", response.data.tokens);
        this.$store.dispatch("setUser", response.data.user);
        return;
      } catch (error) {
        this.msg = error.response.data.detail;
        this.showSnackbar = true;
      } finally {
        this.loader = false;
      }
    },
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuth;
    },
  },
  watch: {
    isAuthenticated() {
      if (this.isAuthenticated) {
        this.$router.push("/portal");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-img-top {
  border-radius: 100%;
  width: 100px;
  height: 100px;
}
@mixin btn-base($backgroundColor: #1a814c, $color: #90949f) {
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  text-align: center !important;
  padding: 1.5rem 1rem !important;
}
.btn {
  @include btn-base;
}

.card-footer {
  button {
    &:nth-child(1) {
      background-color: #e7e9eb;
      color: #90949f;
    }
    &:nth-child(2) {
      background-color: #26a865 !important;
      color: #cad5e6;
      &:hover {
        background-color: #1a814c !important;
        color: white;
      }
    }
  }
}

#particles-js {
  height: 100vh;
  overflow: hidden;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  width: 34rem;
}

.card p {
  font-size: 0.9rem !important;
  color: #90949f;
  font-weight: 700;
}

.card-footer {
  display: flex !important;
  flex-direction: row;
  padding: 0rem !important;
  justify-content: space-between;
  align-items: center;
  div:nth-child(1) {
    flex-basis: 50%;
    padding: 1rem !important;
    background-color: #e7e9eb !important;
    p {
      text-transform: uppercase !important;
      color: #90949f !important;
      font-weight: 600 !important;
    }
  }
  div:nth-child(2) {
    flex-basis: 50%;
    padding: 1rem !important;
    background-color: #1a814c;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
    p {
      text-transform: uppercase !important;
      color: #c8d2e1;
      font-weight: 600;
      text-align: right;
    }
  }
}
</style>
