import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.changeState = this.changeState.bind(this);
		this.state = {
			currentState: 'default',
			states: {
				aguascalientes: [
					'Aguascalientes',
					'Asientos',
					'Calvillo',
					'Cosío',
					'Jesús María',
					'Pabellón de Arteaga',
					'Rincón de Romos',
					'San José de Gracia',
					'Tepezalá',
					'El Llano',
				],
				campeche: [
					'Calkiní',
					'Campeche',
					'Carmen',
					'Champotón',
					'Hecelchakán',
					'Hopelchen',
					'Palizada',
					'Tenabo',
					'Escárcega',
					'Calakmul',
				],
				chiapas: [
					'Chiapas',
					'Acacoyagua',
					'Acala',
					'Acapetahua',
					'Altamirano',
					'Amatán',
					'Amatenango de la Frontera',
					'Amatenango del Valle',
					'Ángel Albino Corzo',
					'Arriaga',
					'Bejucal de Ocampo',
				],
				chihuahua: [
					'Chihuahua',
					'Ahumada',
					'Aldama',
					'Allende',
					'Aquiles Serdán',
					'Ascensión',
					'Bachíniva',
					'Balleza',
					'Batopilas',
					'Bacoyna',
					'Buenaventura',
				],
				cdmx: [
					'CDMX',
					'Álvaro Obregón',
					'Azcapotzalco',
					'Benito Juárez',
					'Coyoacán',
					'Cuajimalpa',
					'Cuauhtemoc',
					'Gustavo A. Madero',
					'Iztacalco',
					'Iztapalapa',
					'Magdalena Contreras',
				],
				hidalgo: [
					'Hidalgo',
					'Acatlán',
					'Acaxochitlán',
					'Actopan',
					'Agua Blanca de Iturbide',
					'Ajacuba',
					'Alfajayucan',
					'Almoloya',
					'Apan',
					'El Arenal',
					'Atitalaquia',
				],
				jalisco: [
					'Jalisco',
					'Acatic',
					'Acatlán de Juárez',
					'Ahualulco de Mercado',
					'Amacueca',
					'Ameca',
					'San Juanito de Escobedo',
					'Arandas',
					'El Arenal',
					'Atemajac de Brizuela',
					'Atnego',
				],
				nayarit: [
					'Nayarit',
					'Acaponeta',
					'Ahuacatlán',
					'Amatlán de las Cañas',
					'Compostela',
					'Huajicori',
					'Ixtlán del Río',
					'Jala',
					'Xalisco',
					'Del Nayar',
					'Rosamorada',
				],
				puebla: [
					'Puebla',
					'Acajete',
					'Acateno',
					'Acatlán',
					'Acatzingo',
					'Acteopan',
					'Ahuacatlán',
					'Ahuatlán',
					'Ahuazontepec',
					'Ahuehuetitla',
					'Ajalpa',
				],
				yucatan: [
					'Yucatán',
					'Abalá',
					'Acanceh',
					'Akil',
					'Baca',
					'Bokobá',
					'Buctzotz',
					'Cacalchén',
					'Calotmul',
					'Cansahcab',
					'Cantamayec',
				],
			},
		};
	}
	changeState(event) {
		this.setState({ currentState: event.target.value }, () => this.addCities());
	}
	addCities() {
		console.log(this.state.states);
		console.log(this.state.states[this.state.currentState]);
	}

	render() {
		return (
			<div className="App">
				<header>
					<h2>Select</h2>
				</header>
				<div className="container">
					<select className="style" onChange={this.changeState}>
						<option value="default">Selecciona un Estado</option>
						<option value="aguascalientes">Aguascalientes</option>
						<option value="campeche">Campeche</option>
						<option value="chiapas">Chiapas</option>
						<option value="chihuahua">Chihuahua</option>
						<option value="cdmx">Ciudad de México</option>
						<option value="hidalgo">Hidalgo</option>
						<option value="jalisco">Jalisco</option>
						<option value="nayarit">Nayarit</option>
						<option value="puebla">Puebla</option>
						<option value="yucatan">Yucatán</option>
					</select>
					<select className="style" disabled={this.state.currentState === 'default' ? true : false}>
						{this.state.currentState !== 'default' ? (
							this.state.states[this.state.currentState].map((element, index) => {
								return <option key={index}>{element}</option>;
							})
						) : (
							<option>Selecciona un municipio</option>
						)}
					</select>
				</div>
			</div>
		);
	}
}

export default App;
