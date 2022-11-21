import React from "react";
import ShivaniSelfIcon from "../assets/images/shivani.svg";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
	UserWrapper,
	UserTitle,
	UserDescription,
	DownloadButton,
	UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout>
			<UserWrapper>
				<UserTitle>
					Shivani <span>Yadav</span>
				</UserTitle>
				<UserDescription>
					<div>
						<p>
						Hello there, welcome to my portfolio. I'm a passionate Project & Operation Manager Currently Working as an Operation Associate - Campaign at galleri5 based in Bangalore.
						</p>
						<DownloadButton
							href="https://raw.githubusercontent.com/ShivashishY/shivanigatsbyv3/main/Shivani%20Yadav%20-%20Operation%20Associate.pdf?token=GHSAT0AAAAAAB3N7X7S7Y3Z4JJHFYX5T3AKY322ASQ"
							download
							title="Resume"
						>
							Download Resume
						</DownloadButton>
					</div>
					<img src={ShivaniSelfIcon} alt="shivani self" />
				</UserDescription>
				<UserTopic>
					{about.map((item) => (
						<AboutBox key={item.id} info={item} />
					))}
				</UserTopic>
			</UserWrapper>
		</Layout>
	);
};

export default IndexPage;
