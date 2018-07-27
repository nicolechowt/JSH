import React, { Component } from "react";

const imgUrls = [
	"https://images.pexels.com/photos/298719/pexels-photo-298719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
	"https://images.pexels.com/photos/997725/pexels-photo-997725.jpeg?cs=srgb&dl=acid-citric-citrus-997725.jpg&fm=jpg"
];

const titles = ["JUICE OF THE DAY", "SUBSCRIBE NOW"];

const content = ["MANGO TANGO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.", "BE A JUICER BE A JUICER Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq." ]

class Carousel extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {

	const ImageSlide = ({ url, title, content }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

		return (
			<div className="image-slide" style={styles}>
				<div className="slide-title">
					<h1>{title}</h1>
				</div>
				
				<div className="overlay">
					<p>{content}</p>
				</div>


			</div>
		);
	}

		return (
			<div className="carousel">
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } title={ titles[this.state.currentImageIndex] } content={ content[this.state.currentImageIndex] } />
				<Circle direction="left" clickFunction={ this.previousSlide }/>			
				<Circle direction="right" clickFunction={ this.nextSlide }/>
			</div>
		);
	}
}

const Circle = ({ direction, clickFunction }) => (
	<div 
		className={ `circle ${direction}` } 
		onClick={ clickFunction }>
	</div>
);



 export default Carousel;