"use client"
//REACT HOOK
import { useContext } from "react"
//CONTEXT
import { ThemeContext } from "@/components/contexts/ThemeContext"

const About = () => {
	const { darkTheme } = useContext<any>(ThemeContext)

	return (
		<div className={darkTheme ? "theme-dark" : "theme-light"}>
			<div className="container">
				<div id="content" className="content-wrapper">
					<div className="about">
						<h1 className="hTitle">About</h1>
						<div className="card border-0 p-3">
							<div className="card-body">
								<p className="card-text">
									Silicon Valley Code Camp is put on by a dedicated group of
									volunteers whose mission is to both provide the highest
									quality content built around the topic of computer code, as
									well as create an environment where shared knowledge is
									paramount.
									<br /> <br />
									The volunteers not only include the organizers, but all the
									speakers in Addition!!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default About
