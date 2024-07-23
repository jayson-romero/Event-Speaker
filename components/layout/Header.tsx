import React from "react"

const Header = () => {
	return (
		<div className="hero py-4">
			<div className="container">
				<div className="row flex-lg-row-reverse align-items-center justify-content-between">
					<div className="col-lg-6 logo justify-content-center justify-content-lg-end">
						<div>
							<img src="/images/SVCClogo.png" alt="SVCC Logo" />
						</div>
						<h2>
							<a href="https://jaysonromero.com" target="_blank">
								Silicon Valley Code Camp 2024
							</a>
						</h2>
					</div>
					<div className="col-lg-6 date-meta text-center text-lg-start mt-3 mt-lg-0">
						<h5 className="text-uppercase ">December 18-19, 2024</h5>
						<h6 className="text-uppercase">Quezon City, Philippines</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
