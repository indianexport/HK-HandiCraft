import logo from "../assets/logo/logo.png"
const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className=" bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

                <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <img src={logo} alt="" className="h-20" />
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            &copy; {currentYear} <a href="https://indianexportwebmart.com/" className="underline">
                                IndianExportWebMart</a>. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;