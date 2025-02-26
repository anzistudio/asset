//uses JsBarcode library

var Barcode = React.createClass({
  render: function () {
    return (
      <div className="Barcode">
        <img id="barcode" className="center" />
      </div>
    );
  }
});

var Rules = React.createClass({
  render: function () {
    return (
      <div className="rules">
        <h1>Anzi Barcode Generator</h1>
        <p>
          Isi kotak Input teks dan angka untuk menghasilkan kode batang
        </p>
      </div>
    );
  }
});

var App = React.createClass({
  onChange: function (e) {
    this.setState({
      barcode: e.target.value
    });
  },

  componentDidUpdate: function () {
    if (this.state.barcode != "") {
      $("#barcode").JsBarcode(this.state.barcode);
    } else $("#barcode").JsBarcode("empty");
  },
  getInitialState: function () {
    return {
      barcode: 12345678
    };
  },

  componentDidMount: function () {
    $("#barcode").JsBarcode(this.state.barcode);
  },

  render: function () {
    return (
      <div>
        <Rules></Rules>
        <input onChange={this.onChange} value={this.state.barcode}></input>
        <Barcode />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("container"));
