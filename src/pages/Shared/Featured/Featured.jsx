import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white mt-10 bg-fixed">
          <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
          <div className="md:flex justify-center items-center pb-20 pt-12 px-16 ">
            <div>
                <img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20,2024</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, saepe tempora reiciendis similique molestiae odit exercitationem non porro dolorum? Ex placeat iusto molestias cupiditate consectetur aliquam quisquam facilis! Aperiam delectus praesentium dolorem est nostrum consectetur fugit nisi, minima optio expedita iste saepe quidem commodi, voluptatibus aliquam quos exercitationem ducimus adipisci.</p>
                    <button className="btn btn-outline btn-info border-0 border-b-4">Order Now</button>
                </div>
                </div>  
        </div>
    );
};

export default Featured;