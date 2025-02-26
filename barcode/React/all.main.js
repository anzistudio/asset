//uses JsBarcode library

var Barcode = React.createClass({ displayName: "Barcode",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Barcode" }, /*#__PURE__*/
      React.createElement("img", { id: "barcode", className: "center" })));


  } });


var Rules = React.createClass({ displayName: "Rules",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "rules" }, /*#__PURE__*/
      React.createElement("h1", null, "anzi Barcode Generator"), /*#__PURE__*/
      React.createElement("p", null, "Isi kotak Input teks dan angka untuk menghasilkan kode batang")));





  } });


var App = React.createClass({ displayName: "App",
  onChange: function (e) {
    this.setState({
      barcode: e.target.value });

  },

  componentDidUpdate: function () {
    if (this.state.barcode != "") {
      $("#barcode").JsBarcode(this.state.barcode);
    } else $("#barcode").JsBarcode("empty");
  },
  getInitialState: function () {
    return {
      barcode: 12345678 };

  },

  componentDidMount: function () {
    $("#barcode").JsBarcode(this.state.barcode);
  },

  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Rules, null), /*#__PURE__*/
      React.createElement("input", { onChange: this.onChange, value: this.state.barcode }), /*#__PURE__*/
      React.createElement(Barcode, null)));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("container"));
