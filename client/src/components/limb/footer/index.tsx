import { useEffect } from "react";

import { FaEnvelope, FaHome, FaTwitter } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import * as AOS from 'aos';
import "aos/dist/aos.css";

// REACT SCROLL
import { Link } from "react-scroll";

// importing AOS for animations

const Footer = () => {
	useEffect(() => {
    AOS.init();
	}, []);

	return (
		<>
			<footer data-aos="fade-up" data-aos-duration="1200" data-aos-offset="300">
				<div
					data-aos="zoom-in"
					data-aos-duration="1500"
					data-aos-offset="200"
					className="footer-TopBar"
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 ">
								<div className="footer-TopBarInner">
									<div className="FooterTextContainer">
										<div className="row ">
											<div
												data-aos="fade-right"
												data-aos-duration="1200"
												data-aos-offset="350"
												className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-left"
											>
												<h2 className="text-white"></h2>
											</div>
											<div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-right">
												<form method="post">
													<div
														data-aos="fade-left"
														data-aos-duration="1200"
														data-aos-offset="350"
														className="FooterInputFields"
													>
														<input
															type="email"
															name="EMAIL"
															placeholder=" "
														/>
														<Link to="upperNavbar" smooth={true} duration={600}>
															<input type="submit" value="Subscribe" />
														</Link>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Address --> */}
				<div className="footer-middleContainer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6 ">
								<div className="footer-TopBarInner">
									<div
										data-aos="fade-up"
										data-aos-duration="1200"
										data-aos-offset="120"
										className="FooterTextContainer"
									>
										<h2>Cloudy</h2>
										<p>
											<br /> It is a long established fact that a reader will be
											distracted by the readable content.
										</p>
									</div>
								</div>
							</div>
							<div
								data-aos="fade-right"
								data-aos-duration="1200"
								data-aos-offset="120"
								className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4"
							>
								<div className="footer-TopBarInner">
									<div className="row">
										<div className="col-sm-12">
											<ul className="ContactAMPIconText">
												<li
													data-aos="fade-up"
													data-aos-duration="1200"
													data-aos-offset="120"
												>
													<a href="upperNavbar">
														<FaHome
															style={{ marginBottom: "0.6rem" }}
															className="FooterAddressIcon FooterListIcons"
														/>
														&nbsp; &nbsp;
														<span>Raleigh, NC</span>
													</a>
												</li>
												<li
													data-aos="fade-up"
													data-aos-duration="1200"
													data-aos-offset="120"
												>
													<a href="mailto:support@iqnonicthemes.com">
														<FaEnvelope className="FooterAddressIcon FooterListIcons" />
														&nbsp; &nbsp;
														<span>support@aws.eth</span>
													</a>
												</li>
												<li
													data-aos="fade-up"
													data-aos-duration="1200"
													data-aos-offset="120"
												>
													<a href="tel:+0123456789">
														<AiFillPhone className="FooterAddressIcon FooterListIcons" />
														&nbsp; &nbsp;
														<span></span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Address END --> */}
				<div className="copyright-footer">
					<div className="container">
						<div className="pt-3 pb-3">
							<div className="row justify-content-between">
								<div className="col-lg-6 col-md-12 text-lg-left text-md-center text-center">
									<div className="social-icone">
										<ul>
											<li
												data-aos="fade-up-right"
												data-aos-duration="1200"
												data-aos-offset="5"
												className="d-inline"
											>
												<a href="upperNavbar">
													<FaTwitter className="SocialMediaIcons" />
												</a>
											</li>
											<li
												data-aos="fade-up-right"
												data-aos-duration="1200"
												data-aos-offset="5"
												className="d-inline"
											>
												<a href="upperNavbar">
													<GrFacebook className="SocialMediaIcons" />
												</a>
											</li>
											<li
												data-aos="fade-up-right"
												data-aos-duration="1200"
												data-aos-offset="5"
												className="d-inline"
											>
												<a href="upperNavbar">
													<SiLinkedin className="SocialMediaIcons" />
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div
									data-aos="fade-left"
									data-aos-duration="1200"
									data-aos-offset="5"
									className="col-lg-6 col-md-12 text-lg-right text-md-center text-center"
								>
									<span className="copyright">
										Copyright 2022 Anonymous Web Services All Rights Reserved.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
