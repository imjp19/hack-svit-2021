import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	Link,
} from "@chakra-ui/react";

const Nav = () => (
	<>
		<Box>
			<Container maxW="container.xl" py="8">
				<Flex justify="center" align="center">
					<Icon
						width="206px"
						height="40px"
						viewBox="0 0 206 40"
						fill="none"
					>
						<g clip-path="url(#clip0_46_1601)">
							<path
								d="M38.9675 1.23671V14.2704C38.9669 14.3471 38.9543 14.4233 38.9302 14.4961L34.8906 26.6111L30.7469 39.0481C30.6992 39.1899 30.6082 39.3132 30.4867 39.4005C30.3652 39.4879 30.2193 39.5349 30.0697 39.5349H26.6758C26.5823 39.5351 26.4897 39.5169 26.4033 39.4814C26.3169 39.4458 26.2383 39.3935 26.1721 39.3274C26.1059 39.2614 26.0534 39.183 26.0176 39.0967C25.9817 39.0103 25.9633 38.9178 25.9633 38.8243V27.3237C25.9628 27.1349 25.8875 26.9539 25.754 26.8204C25.6205 26.6869 25.4396 26.6117 25.2508 26.6111H13.6696C13.4807 26.6111 13.2994 26.6862 13.1658 26.8198C13.0322 26.9535 12.9571 27.1347 12.9571 27.3237V38.8243C12.9566 39.0129 12.8813 39.1937 12.7477 39.3269C12.6142 39.4601 12.4332 39.5349 12.2446 39.5349H0.712535C0.619057 39.5351 0.526447 39.5169 0.44001 39.4814C0.353573 39.4458 0.275008 39.3935 0.208817 39.3274C0.142626 39.2614 0.0901115 39.183 0.0542793 39.0967C0.0184471 39.0103 2.36232e-06 38.9178 2.71899e-06 38.8243V1.23671C-0.000256325 1.14306 0.0179968 1.05029 0.0537132 0.963724C0.0894296 0.877159 0.141904 0.798507 0.208121 0.732291C0.274337 0.666074 0.352989 0.6136 0.439554 0.577883C0.52612 0.542167 0.618891 0.523914 0.712535 0.524173H12.2465C12.4355 0.524173 12.6168 0.599243 12.7504 0.732869C12.884 0.866495 12.9591 1.04773 12.9591 1.23671V12.861C12.9591 13.05 13.0341 13.2312 13.1678 13.3648C13.3014 13.4985 13.4826 13.5735 13.6716 13.5735H25.2527C25.4415 13.573 25.6225 13.4978 25.756 13.3643C25.8895 13.2308 25.9647 13.0498 25.9653 12.861V1.23671C25.965 1.14306 25.9833 1.05029 26.019 0.963724C26.0547 0.877159 26.1072 0.798507 26.1734 0.732291C26.2396 0.666074 26.3182 0.6136 26.4048 0.577883C26.4914 0.542167 26.5841 0.523914 26.6778 0.524173H38.2589C38.4472 0.52521 38.6274 0.600739 38.7602 0.734252C38.893 0.867766 38.9675 1.04841 38.9675 1.23671Z"
								fill="#2E9BFF"
							/>
							<path
								d="M70.2935 39.3091H59.2424C59.0932 39.3095 58.9476 39.2628 58.8264 39.1758C58.7052 39.0888 58.6145 38.9658 58.5671 38.8243L54.5824 26.9115C54.5348 26.7702 54.444 26.6474 54.3228 26.5604C54.2017 26.4734 54.0563 26.4266 53.9072 26.4266H50.1247C49.9755 26.4266 49.8302 26.4734 49.709 26.5604C49.5879 26.6474 49.4971 26.7702 49.4494 26.9115L45.4667 38.8243C45.4189 38.9659 45.3279 39.089 45.2063 39.176C45.0848 39.263 44.939 39.3096 44.7895 39.3091H33.4695C33.3567 39.3096 33.2455 39.2832 33.145 39.2322C33.0444 39.1811 32.9575 39.1069 32.8913 39.0156C32.8252 38.9243 32.7817 38.8186 32.7644 38.7072C32.7472 38.5957 32.7568 38.4818 32.7923 38.3748L36.7887 26.4266L41.1346 13.4303L45.3215 0.906954C45.3694 0.765803 45.4602 0.643171 45.5813 0.556231C45.7024 0.469292 45.8476 0.422399 45.9967 0.422119H58.2766L58.2982 0.475117L61.1856 9.11188C61.2171 9.20921 61.2273 9.31219 61.2154 9.4138C61.2036 9.51541 61.17 9.61328 61.1169 9.70075C59.2646 12.7502 58.2893 16.2515 58.2982 19.8195V19.9078C58.315 23.7928 59.4912 27.5843 61.6761 30.7967C63.8611 34.0091 66.9553 36.4961 70.5624 37.939C70.6584 37.9772 70.7449 38.0358 70.8161 38.1107C70.8873 38.1856 70.9413 38.275 70.9746 38.3728V38.3728C71.0106 38.4803 71.0204 38.5948 71.0032 38.7068C70.9859 38.8188 70.9421 38.925 70.8755 39.0166C70.8088 39.1083 70.7212 39.1826 70.62 39.2335C70.5187 39.2844 70.4068 39.3103 70.2935 39.3091V39.3091Z"
								fill="#FAF8F5"
							/>
							<path
								d="M105.694 39.5368H93.4045C93.288 39.5367 93.1732 39.5077 93.0705 39.4526C92.9678 39.3975 92.8803 39.3179 92.8157 39.2208L90.2934 35.4442L89.3531 34.0407L84.3929 26.6131L82.96 24.4696L82.638 23.9887L81.7076 22.597C81.6295 22.481 81.5878 22.3443 81.5879 22.2044V17.7486C81.588 17.6091 81.6289 17.4726 81.7057 17.356L82.6223 15.9702L82.9403 15.4913L84.2064 13.5794L89.2942 5.8927L90.2286 4.48334L92.6488 0.84216C92.7136 0.74511 92.8011 0.665386 92.9037 0.609955C93.0064 0.554525 93.121 0.525072 93.2377 0.52417H105.525C105.654 0.525203 105.779 0.560812 105.889 0.627239C105.999 0.693666 106.088 0.788452 106.149 0.901602C106.209 1.01475 106.237 1.14208 106.231 1.27015C106.225 1.39822 106.185 1.52229 106.114 1.62928L98.4472 13.2104L98.2058 13.5755L97.2675 15.0006L93.9679 19.9844L94.0288 20.0747L97.2774 24.9387L98.3942 26.6111L98.4669 26.723L106.285 38.4278C106.358 38.5348 106.4 38.6596 106.406 38.7887C106.413 38.9178 106.385 39.0463 106.324 39.1604C106.263 39.2745 106.172 39.3698 106.061 39.4361C105.95 39.5025 105.824 39.5373 105.694 39.5368Z"
								fill="#FAF8F5"
							/>
							<path
								d="M87.4334 34.0643C87.4867 34.1436 87.5233 34.2328 87.5412 34.3266C87.5591 34.4205 87.5578 34.517 87.5375 34.6103C87.5171 34.7036 87.4781 34.7919 87.4228 34.8697C87.3675 34.9476 87.297 35.0135 87.2155 35.0634C85.3762 36.1856 83.3483 36.9644 81.2306 37.362C80.1304 37.5687 79.0132 37.6725 77.8937 37.6721C73.1633 37.6893 68.6196 35.828 65.2607 32.4971C61.9018 29.1662 60.0026 24.6382 59.9803 19.9078C59.9803 19.8784 59.9803 19.847 59.9803 19.8175C59.9755 17.6327 60.3748 15.4659 61.158 13.4263C61.4018 12.79 61.6829 12.1686 62.0001 11.5655C63.1367 9.39985 64.7041 7.48944 66.606 5.95163C68.5079 4.41381 70.704 3.28106 73.0596 2.62295C75.4152 1.96483 77.8805 1.79526 80.3041 2.12463C82.7276 2.45401 85.0582 3.27539 87.1527 4.53832C87.2342 4.58812 87.3049 4.65385 87.3605 4.73158C87.416 4.80932 87.4553 4.89745 87.476 4.99072C87.4967 5.08399 87.4984 5.18048 87.481 5.27442C87.4635 5.36835 87.4273 5.45781 87.3745 5.53743L82.1336 13.4303L81.478 14.4117L81.2306 14.7847L81.1698 14.8769C80.275 14.2859 79.2371 13.9478 78.1659 13.8983C77.0947 13.8489 76.0301 14.0899 75.0847 14.596C74.1393 15.1021 73.3483 15.8544 72.7955 16.7732C72.2426 17.692 71.9485 18.7433 71.9441 19.8156C71.9441 19.845 71.9441 19.8764 71.9441 19.9059C71.9641 20.9723 72.2706 22.0136 72.8314 22.9209C73.3922 23.8281 74.1868 24.5678 75.1318 25.0623C76.0767 25.5569 77.1374 25.7882 78.2025 25.7319C79.2675 25.6756 80.2979 25.3339 81.1855 24.7425L81.2267 24.8033L81.4956 25.1959L82.3122 26.4129L87.4334 34.0643Z"
								fill="#A564FF"
							/>
							<path
								d="M182.083 1.21107V38.8988C182.082 39.0876 182.007 39.2685 181.874 39.402C181.74 39.5355 181.559 39.6108 181.37 39.6113H167.583C167.47 39.6112 167.359 39.5843 167.258 39.5328C167.158 39.4813 167.071 39.4066 167.005 39.315C166.939 39.2234 166.896 39.1174 166.879 39.0058C166.862 38.8941 166.872 38.7801 166.908 38.673L179.47 0.985334C179.517 0.843655 179.608 0.720431 179.729 0.633077C179.85 0.545724 179.996 0.49866 180.145 0.498535H181.372C181.561 0.49957 181.741 0.575034 181.874 0.708492C182.007 0.84195 182.082 1.02259 182.083 1.21107Z"
								fill="#FAF8F5"
							/>
							<path
								d="M132.199 17.1597C134.827 17.1548 137.445 17.4652 139.998 18.0842C140.1 18.1105 140.195 18.1594 140.276 18.2273C140.357 18.2953 140.422 18.3806 140.465 18.4768L141.818 21.3368L148.073 34.553C148.143 34.7006 148.16 34.8676 148.121 35.0262C148.083 35.1847 147.991 35.3253 147.861 35.4245C145.773 37.0243 142.976 38.2923 139.739 39.0696C137.283 39.6299 134.772 39.9182 132.252 39.9294C129.308 39.9726 124.778 40.3337 119.886 39.0677C117.531 38.4592 115.393 37.6583 113.605 36.6356C113.509 36.5821 113.428 36.5073 113.366 36.4171C113.304 36.3269 113.263 36.2236 113.248 36.1153C113.232 36.007 113.241 35.8965 113.275 35.7924C113.309 35.6883 113.366 35.5933 113.442 35.5148L118.893 29.9186C119.011 29.7979 119.169 29.7231 119.337 29.7076C119.505 29.6922 119.673 29.737 119.812 29.8342C121.67 31.1415 127.129 33.3674 132.241 32.6235C135.731 32.121 138.626 30.4348 138.626 27.7358C138.626 25.0368 135.768 22.8521 132.241 22.8521V22.7618C127.333 22.7618 122.838 21.6901 119.409 19.9392C115.322 17.8546 112.735 14.7925 112.735 11.379C112.735 5.09769 121.488 -0.00585938 132.284 -0.00585938C137.242 -0.00585938 141.769 1.06785 145.215 2.84231C145.327 2.89995 145.421 2.98613 145.489 3.09206C145.556 3.19799 145.594 3.3199 145.599 3.44536C145.604 3.57083 145.576 3.69538 145.517 3.80633C145.458 3.91728 145.371 4.01066 145.265 4.07698C142.836 5.59626 140.108 7.29613 137.774 8.73102C137.648 8.80969 137.5 8.84705 137.351 8.8379C137.202 8.82876 137.06 8.77357 136.944 8.67998C135.788 7.69853 134.127 7.09985 132.282 7.09985C128.784 7.09985 125.946 9.28848 125.946 11.9875C125.946 14.6865 128.707 17.1322 132.192 17.1479"
								fill="#FAF8F5"
							/>
							<path
								d="M177.809 1.44073L164.921 39.1284C164.873 39.2694 164.782 39.3918 164.661 39.4784C164.54 39.565 164.395 39.6115 164.246 39.6113H152.292C152.157 39.6112 152.025 39.5728 151.911 39.5005C151.797 39.4282 151.706 39.3251 151.648 39.203L150.886 37.5954L149.444 34.547L143.211 21.3779L142.23 19.2894L138.326 10.3209C138.279 10.211 138.23 10.105 138.175 9.99898V9.98131C140.567 8.53073 143.912 6.44809 146.959 4.55193C147.043 4.49951 147.138 4.46536 147.236 4.45165C147.334 4.43795 147.435 4.44501 147.53 4.47237C147.626 4.49973 147.715 4.54679 147.791 4.61053C147.867 4.67426 147.929 4.75326 147.973 4.84244L151.732 13.1789L156.11 22.0492L156.306 22.4654C156.368 22.5915 156.467 22.6963 156.589 22.7664C156.711 22.8366 156.851 22.869 156.992 22.8595C157.132 22.8501 157.267 22.7992 157.379 22.7133C157.49 22.6275 157.574 22.5104 157.619 22.377L164.795 0.981414C164.844 0.84015 164.935 0.717552 165.056 0.630915C165.178 0.544279 165.323 0.497976 165.473 0.49854H177.14C177.253 0.499356 177.364 0.526966 177.464 0.579098C177.564 0.631229 177.65 0.70639 177.716 0.798392C177.781 0.890394 177.824 0.996606 177.84 1.10828C177.856 1.21996 177.846 1.3339 177.809 1.44073V1.44073Z"
								fill="#FFA336"
							/>
							<path
								d="M183.883 10.0029L183.8 1.26013C183.799 1.16616 183.817 1.07292 183.852 0.9858C183.887 0.898681 183.939 0.819418 184.005 0.752602C184.072 0.685785 184.15 0.632742 184.237 0.596542C184.324 0.560343 184.417 0.541706 184.511 0.541712L204.801 0.500491C204.895 0.500233 204.988 0.518473 205.074 0.554166C205.161 0.589858 205.24 0.642302 205.306 0.708492C205.373 0.774683 205.425 0.853319 205.461 0.939896C205.497 1.02647 205.516 1.11929 205.516 1.21303V9.29036C205.516 9.47934 205.441 9.66057 205.307 9.7942C205.173 9.92783 204.992 10.0029 204.803 10.0029H193.595C193.501 10.0026 193.409 10.0209 193.322 10.0566C193.235 10.0923 193.157 10.1448 193.091 10.211C193.024 10.2772 192.972 10.3559 192.936 10.4424C192.9 10.529 192.882 10.6218 192.882 10.7154V38.889C192.882 39.0778 192.807 39.2587 192.673 39.3922C192.54 39.5257 192.359 39.601 192.17 39.6015H184.595C184.406 39.601 184.225 39.5257 184.092 39.3922C183.958 39.2587 183.883 39.0778 183.883 38.889V10.0029"
								fill="#FF65A4"
							/>
						</g>
						<defs>
							<clipPath id="clip0_46_1601">
								<rect
									width="205.516"
									height="40"
									fill="white"
								/>
							</clipPath>
						</defs>
					</Icon>

					{/* <HStack size="lg">
						<Link>About</Link>
						<Link>Speakers</Link>
						<Link>Schedule</Link>
						<Link>Sponsors</Link>
					</HStack> */}
				</Flex>
			</Container>
		</Box>
	</>
);

export default Nav;
