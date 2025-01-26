import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";

function Services() {
    const services = [
        {
            title: "UI/UX",
            picture: "/user-interface-svgrepo-com.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nihil."
        },
        {
            title: "FrontEnd Design",
            picture: "/react-svgrepo-com.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nihil."
        },
        {
            title: "BackEnd Design",
            picture: "/laravel-svgrepo-com.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nihil."
        },
        {
            title: "SEO",
            picture: "/seo-search-marketing-internet-network-2-svgrepo-com.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nihil."
        }
    ]
    const servicesItem = services.map((item, index) => {
        return <ServiceCard key={index} title={item.title} picture={item.picture} description={item.description}/>
    })
    return (
        <>

            <div className={styles.container}>
                <h3 className={styles.title}>MY SERVICE</h3>
                <div className={styles.cardContainer}>
                    {servicesItem}
                </div>

            </div>
        </>
    );
}

export default Services;