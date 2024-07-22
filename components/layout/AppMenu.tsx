"use client"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const AppMenu = () => {
	const { toggleTheme } = useContext(ThemeContext)

	return (
		<header className="d-flex justify-content-center py-3">
			<div className="container">
				<ul className="nav nav-pills gap-1 align-items-center justify-content-start">
					<li className="nav-item">
						<button className="nav-link">
							<Link href={"/"}>Speakers</Link>
						</button>
					</li>
					<li className="nav-item">
						<button className="nav-link">
							<Link href={"/speakerlist"}>Speaker List</Link>
						</button>
					</li>
					<li className="nav-item">
						<button className="nav-item nav-link">
							<Link href={"/about"}>About</Link>
						</button>
					</li>
					<li>
						<input
							type="checkbox"
							className="themeToggleCheckbox"
							autoComplete="off"
							id="themeToggle"
							defaultChecked={false}
							onClick={() => {
								toggleTheme()
							}}
						/>
						<label htmlFor="themeToggle" className="themeToggleCheckbox-label">
							<i className="fas fa-moon"></i>
							<i className="fas fa-sun"></i>
							<span className="ball"></span>
						</label>
					</li>
				</ul>
			</div>
		</header>
	)
}
export default AppMenu
