
const Footer = () => {
    return (
        <footer>
            <div className="bg-darkAccent text-darkShades text-xl flex flex-col md:flex-row justify-evenly py-5 font-bold">
                <div className="flex justify-center">
                    <div>
                        <p><a href="https://www.linkedin.com/in/albertochazaroromero/">Linked</a></p>
                    </div>
                    <div>
                        <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="imagen Linkedin" className="w-7" />
                    </div>
                </div>
                <div>
                    <p>Developed by ChazaroDev</p>
                </div>
                <div className="flex justify-center">
                    <div>
                        <img src="https://aidanfinn.com/wp-content/uploads/2022/01/GitHub-logo.png" alt="imagen github" className="w-14" />
                    </div>
                    <div>
                        <p><a href="">Read my Code</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer