(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Layouts/Guest'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Input'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Label'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/ValidationErrors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Layouts/Guest'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  components: {
    BreezeButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    BreezeInput: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Input'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    BreezeLabel: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/Label'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    BreezeValidationErrors: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Components/ValidationErrors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.route('register'), {
        onFinish: function onFinish() {
          return _this.form.reset('password', 'password_confirmation');
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e_bindings_form_data_submit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e&bindings={"form":"data","submit":"options"} */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"data\",\"submit\":\"options\"}");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js");



_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Register_vue_vue_type_template_id_e59c811e_bindings_form_data_submit_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Auth/Register.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"data\",\"submit\":\"options\"}":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={"form":"data","submit":"options"} ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e59c811e_bindings_form_data_submit_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e59c811e_bindings_form_data_submit_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=e59c811e&bindings={"form":"data","submit":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"data\",\"submit\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"data\",\"submit\":\"options\"}":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={"form":"data","submit":"options"} ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "mt-4" }
const _hoisted_2 = { class: "mt-4" }
const _hoisted_3 = { class: "mt-4" }
const _hoisted_4 = { class: "flex items-center justify-end mt-4" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Already registered? ")
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Register ")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_breeze_validation_errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breeze-validation-errors")
  const _component_breeze_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breeze-label")
  const _component_breeze_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breeze-input")
  const _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link")
  const _component_breeze_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breeze-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_validation_errors, { class: "mb-4" }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
      onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.submit && $options.submit(...args)), ["prevent"]))
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_label, {
          for: "name",
          value: "Name"
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: $data.form.name,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.form.name = $event)),
          required: "",
          autofocus: "",
          autocomplete: "name"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_label, {
          for: "email",
          value: "Email"
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: $data.form.email,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.form.email = $event)),
          required: "",
          autocomplete: "username"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_label, {
          for: "password",
          value: "Password"
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: $data.form.password,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($data.form.password = $event)),
          required: "",
          autocomplete: "new-password"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_label, {
          for: "password_confirmation",
          value: "Confirm Password"
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: $data.form.password_confirmation,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ($data.form.password_confirmation = $event)),
          required: "",
          autocomplete: "new-password"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
          href: _ctx.route('login'),
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breeze_button, {
          class: ["ml-4", { 'opacity-25': $data.form.processing }],
          disabled: $data.form.processing
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["class", "disabled"])
      ])
    ], 32 /* HYDRATE_EVENTS */)
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

}]);