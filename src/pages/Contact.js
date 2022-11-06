import ContactContent from "../components/ContactContent";

const Contact = () => {
    return (
        <div>
                <p className="title">CONTACT</p>
                <div className="content-container">
                <h1>Want to ask something? Contact me!</h1>
                <ContactContent
                    title="Email:"
                    detail="email@email.com"
                />
                <ContactContent
                    title="Phone number:"
                    detail="091233456"
                />
                <ContactContent
                    title="Social media:"
                    detail="facebook.com"
                />
                <form action="mailto:kphamnm06@gmail.com" method="post" encType="text/plain">
                <button type="submit">Send me an email!</button>
                </form>


                {/* <form action="mailto:kphamnm06@gmail.com?body={text}" method="post" encType="text/plain">
                    <input type="text" placeholder="First Name"/><br/><br/>
                    <input type="text" placeholder="Last Name"/><br/><br/>
                    <input type="email" placeholder="Your Email"/><br/><br/><br/><br/>
                    <textarea onChange={handleChange} rows="8" cols="20" placeholder="Your Message"></textarea>
                    <div>
                    <input type="submit" />
                    </div>
                </form> */}
                </div>
            </div>
    )
}

export default Contact;