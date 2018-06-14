import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.changeState = this.changeState.bind(this);
		this.setCity = this.setCity.bind(this);
		this.addList = this.addList.bind(this);
		this.sortByLength = this.sortByLength.bind(this);
		this.sortByName = this.sortByName.bind(this);
		this.state = {
			repeated: 0,
			currentState: 'default',
			currentCity: 'default',
			list: [],
			states: {
				Aguascalientes: [
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
				Campeche: [
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
				Chiapas: [
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
				Chihuahua: [
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
				CDMX: [
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
				Hidalgo: [
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
				Jalisco: [
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
				Nayarit: [
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
				Puebla: [
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
				Yucatán: [
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
		this.setState({ currentState: event.target.value });
		this.setState({ currentCity: 'default' });
	}

	setCity(event) {
		this.setState({ currentCity: event.target.value });
	}

	addList() {
		if (this.state.list.length < 10) {
			this.setState({ list: [...this.state.list, this.state.currentCity] }, () => {
				this.countRepeated();
			});
		} else {
			let something = this.state.list;
			something.shift();
			this.setState({ list: [...something, this.state.currentCity] }, () => {
				this.countRepeated();
			});
		}
	}

	countRepeated() {
		console.log('test');
		let counter = 0;
		var list = this.state.list;
		console.log(list);
		for (let i = 0; i < list; i++) {
			for (let j = 0; j < i; j++) {
				if (i !== j && list[i] === list[j]) {
					counter++;
					console.log(counter);
					this.setState({ repeated: counter });
				}
			}
			// console.log(counter);
			// this.setState({ repeated: counter });
		}
	}
	sortByLength() {
		let sorted = this.state.list.sort((a, b) => {
			return a.length - b.length;
		});
		this.setState({ list: [...sorted] });
	}
	sortByName() {
		let sorted = this.state.list.sort();
		this.setState({ list: [...sorted] });
	}

	render() {
		return (
			<div className="App">
				<header>
					<h2>Select</h2>
				</header>
				<div className="container">
					<select className="style" onChange={this.changeState}>
						{Object.keys(this.state.states).map((element, index) => <option key={index}>{element}</option>)}
					</select>
					<select
						onChange={this.setCity}
						className="style"
						disabled={this.state.currentState === 'default' ? true : false}
					>
						{this.state.currentState !== 'default' ? (
							this.state.states[this.state.currentState].map((element, index) => {
								return <option key={index}>{element}</option>;
							})
						) : (
							<option>Selecciona un municipio</option>
						)}
					</select>
					<button disabled={this.state.currentCity === 'default' ? true : false} onClick={this.addList}>
						Agregar municipio
					</button>
				</div>
				<div>
					{this.state.list.map((element, index) => {
						return <p key={index}>{element}</p>;
					})}
					<button onClick={this.sortByName}>Ordenar por nombre</button>
					<button onClick={this.sortByLength}>Ordenar por longitud</button>
					<p>Ciudades repetidas: {this.state.repeated}</p>
				</div>
			</div>
		);
	}
}

export default App;
