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
						Hello there, welcome to my portfolio. I'm a passionate Project & Operation Manager currently working as an Operation Associate - Campaign at galleri5 based in Bangalore.
						</p>
						<DownloadButton
							href="https://github.com/ShivashishY/shivanigatsbyv3/raw/main/Shivani%20Yadav%20-%20Operation%20Associate%20.pdf"
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
