import FlyingBookBrain from '../svgComponents/characters/FlyingBookBrain';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useViewport } from '../context/viewport';
import Paper from '../assets/icons/Paper.svg';
import Button from '@material-ui/core/Button';
import { typographyBlack } from '../theme';

function HomePage() {
	const { width } = useViewport();
	const breakpoint = 1000;

	return (
		<>
			<div style={{ width: '100%', paddingTop: '5rem', backgroundColor: '#e4ebf5' }} />
			<Container style={{ paddingTop: '5.5rem', paddingBottom: '6rem' }}>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexFlow: width < 1200 ? 'column' : 'row-reverse',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<div style={{ flexGrow: 1 }}>
						<FlyingBookBrain
							width={width < breakpoint ? 330 : 600}
							height={width < breakpoint ? 260 : 425}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							marginTop: '24px',
						}}>
						<svg
							width={width < breakpoint ? 315 : 500}
							height={width < breakpoint ? 150 : 200}
							viewBox='0 0 713 221'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M85.4688 82.125L95.9688 30.75H107.734L91.9844 99H80.6406L67.6562 49.1719L54.3906 99H43L27.25 30.75H39.0156L49.6094 82.0312L62.6406 30.75H72.5781L85.4688 82.125ZM142.861 99.9375C135.642 99.9375 129.783 97.6719 125.283 93.1406C120.814 88.5781 118.579 82.5156 118.579 74.9531V73.5469C118.579 68.4844 119.548 63.9688 121.486 60C123.454 56 126.204 52.8906 129.736 50.6719C133.267 48.4531 137.204 47.3438 141.548 47.3438C148.454 47.3438 153.783 49.5469 157.533 53.9531C161.314 58.3594 163.204 64.5938 163.204 72.6562V77.25H130.064C130.408 81.4375 131.798 84.75 134.236 87.1875C136.704 89.625 139.798 90.8438 143.517 90.8438C148.736 90.8438 152.986 88.7344 156.267 84.5156L162.408 90.375C160.376 93.4062 157.658 95.7656 154.251 97.4531C150.876 99.1094 147.079 99.9375 142.861 99.9375ZM141.501 56.4844C138.376 56.4844 135.845 57.5781 133.908 59.7656C132.001 61.9531 130.783 65 130.251 68.9062H151.954V68.0625C151.704 64.25 150.689 61.375 148.908 59.4375C147.126 57.4688 144.658 56.4844 141.501 56.4844ZM190.924 99H179.534V27H190.924V99ZM230.926 90.8438C233.769 90.8438 236.129 90.0156 238.004 88.3594C239.879 86.7031 240.879 84.6562 241.004 82.2188H251.738C251.613 85.375 250.629 88.3281 248.785 91.0781C246.941 93.7969 244.441 95.9531 241.285 97.5469C238.129 99.1406 234.723 99.9375 231.066 99.9375C223.973 99.9375 218.348 97.6406 214.191 93.0469C210.035 88.4531 207.957 82.1094 207.957 74.0156V72.8438C207.957 65.125 210.019 58.9531 214.144 54.3281C218.269 49.6719 223.894 47.3438 231.019 47.3438C237.051 47.3438 241.957 49.1094 245.738 52.6406C249.551 56.1406 251.551 60.75 251.738 66.4688H241.004C240.879 63.5625 239.879 61.1719 238.004 59.2969C236.16 57.4219 233.801 56.4844 230.926 56.4844C227.238 56.4844 224.394 57.8281 222.394 60.5156C220.394 63.1719 219.379 67.2188 219.348 72.6562V74.4844C219.348 79.9844 220.332 84.0938 222.301 86.8125C224.301 89.5 227.176 90.8438 230.926 90.8438ZM264.927 73.1719C264.927 68.2031 265.911 63.7344 267.88 59.7656C269.849 55.7656 272.614 52.7031 276.177 50.5781C279.739 48.4219 283.833 47.3438 288.458 47.3438C295.302 47.3438 300.849 49.5469 305.099 53.9531C309.38 58.3594 311.693 64.2031 312.036 71.4844L312.083 74.1562C312.083 79.1562 311.114 83.625 309.177 87.5625C307.271 91.5 304.521 94.5469 300.927 96.7031C297.364 98.8594 293.239 99.9375 288.552 99.9375C281.396 99.9375 275.661 97.5625 271.349 92.8125C267.068 88.0312 264.927 81.6719 264.927 73.7344V73.1719ZM276.318 74.1562C276.318 79.375 277.396 83.4688 279.552 86.4375C281.708 89.375 284.708 90.8438 288.552 90.8438C292.396 90.8438 295.38 89.3438 297.505 86.3438C299.661 83.3438 300.739 78.9531 300.739 73.1719C300.739 68.0469 299.63 63.9844 297.411 60.9844C295.224 57.9844 292.239 56.4844 288.458 56.4844C284.739 56.4844 281.786 57.9688 279.599 60.9375C277.411 63.875 276.318 68.2812 276.318 74.1562ZM339.147 48.2812L339.475 53.5781C343.038 49.4219 347.913 47.3438 354.1 47.3438C360.881 47.3438 365.522 49.9375 368.022 55.125C371.709 49.9375 376.897 47.3438 383.584 47.3438C389.178 47.3438 393.334 48.8906 396.053 51.9844C398.803 55.0781 400.209 59.6406 400.272 65.6719V99H388.881V66C388.881 62.7812 388.178 60.4219 386.772 58.9219C385.366 57.4219 383.038 56.6719 379.788 56.6719C377.194 56.6719 375.069 57.375 373.413 58.7812C371.788 60.1562 370.647 61.9688 369.991 64.2188L370.038 99H358.647V65.625C358.491 59.6562 355.444 56.6719 349.506 56.6719C344.944 56.6719 341.709 58.5312 339.803 62.25V99H328.413V48.2812H339.147ZM441.023 99.9375C433.804 99.9375 427.945 97.6719 423.445 93.1406C418.976 88.5781 416.742 82.5156 416.742 74.9531V73.5469C416.742 68.4844 417.711 63.9688 419.648 60C421.617 56 424.367 52.8906 427.898 50.6719C431.429 48.4531 435.367 47.3438 439.711 47.3438C446.617 47.3438 451.945 49.5469 455.695 53.9531C459.476 58.3594 461.367 64.5938 461.367 72.6562V77.25H428.226C428.57 81.4375 429.961 84.75 432.398 87.1875C434.867 89.625 437.961 90.8438 441.679 90.8438C446.898 90.8438 451.148 88.7344 454.429 84.5156L460.57 90.375C458.539 93.4062 455.82 95.7656 452.414 97.4531C449.039 99.1094 445.242 99.9375 441.023 99.9375ZM439.664 56.4844C436.539 56.4844 434.008 57.5781 432.07 59.7656C430.164 61.9531 428.945 65 428.414 68.9062H450.117V68.0625C449.867 64.25 448.851 61.375 447.07 59.4375C445.289 57.4688 442.82 56.4844 439.664 56.4844ZM478.587 114.375L472.446 110.719C474.259 107.875 475.493 105.391 476.149 103.266C476.837 101.172 477.196 99.0312 477.228 96.8438V87.9844H487.493L487.446 96.1875C487.415 99.5 486.571 102.812 484.915 106.125C483.29 109.469 481.181 112.219 478.587 114.375Z'
								fill={typographyBlack}
							/>
							<path
								d='M170.141 188C169.641 187.031 169.203 185.453 168.828 183.266C165.203 187.047 160.766 188.938 155.516 188.938C150.422 188.938 146.266 187.484 143.047 184.578C139.828 181.672 138.219 178.078 138.219 173.797C138.219 168.391 140.219 164.25 144.219 161.375C148.25 158.469 154 157.016 161.469 157.016H168.453V153.688C168.453 151.062 167.719 148.969 166.25 147.406C164.781 145.812 162.547 145.016 159.547 145.016C156.953 145.016 154.828 145.672 153.172 146.984C151.516 148.266 150.688 149.906 150.688 151.906H139.297C139.297 149.125 140.219 146.531 142.062 144.125C143.906 141.688 146.406 139.781 149.562 138.406C152.75 137.031 156.297 136.344 160.203 136.344C166.141 136.344 170.875 137.844 174.406 140.844C177.938 143.812 179.75 148 179.844 153.406V176.281C179.844 180.844 180.484 184.484 181.766 187.203V188H170.141ZM157.625 179.797C159.875 179.797 161.984 179.25 163.953 178.156C165.953 177.062 167.453 175.594 168.453 173.75V164.188H162.312C158.094 164.188 154.922 164.922 152.797 166.391C150.672 167.859 149.609 169.938 149.609 172.625C149.609 174.812 150.328 176.562 151.766 177.875C153.234 179.156 155.188 179.797 157.625 179.797ZM196.361 162.266C196.361 154.453 198.173 148.188 201.798 143.469C205.423 138.719 210.283 136.344 216.376 136.344C221.751 136.344 226.095 138.219 229.408 141.969V116H240.798V188H230.486L229.923 182.75C226.517 186.875 221.97 188.938 216.283 188.938C210.345 188.938 205.533 186.547 201.845 181.766C198.189 176.984 196.361 170.484 196.361 162.266ZM207.751 163.25C207.751 168.406 208.736 172.438 210.704 175.344C212.704 178.219 215.533 179.656 219.189 179.656C223.845 179.656 227.251 177.578 229.408 173.422V151.766C227.314 147.703 223.939 145.672 219.283 145.672C215.595 145.672 212.751 147.141 210.751 150.078C208.751 152.984 207.751 157.375 207.751 163.25ZM277.284 173.562L288.018 137.281H299.784L282.206 188H272.315L254.596 137.281H266.409L277.284 173.562ZM335.332 188.938C328.113 188.938 322.254 186.672 317.754 182.141C313.285 177.578 311.051 171.516 311.051 163.953V162.547C311.051 157.484 312.019 152.969 313.957 149C315.926 145 318.676 141.891 322.207 139.672C325.738 137.453 329.676 136.344 334.019 136.344C340.926 136.344 346.254 138.547 350.004 142.953C353.785 147.359 355.676 153.594 355.676 161.656V166.25H322.535C322.879 170.438 324.269 173.75 326.707 176.188C329.176 178.625 332.269 179.844 335.988 179.844C341.207 179.844 345.457 177.734 348.738 173.516L354.879 179.375C352.848 182.406 350.129 184.766 346.723 186.453C343.348 188.109 339.551 188.938 335.332 188.938ZM333.973 145.484C330.848 145.484 328.316 146.578 326.379 148.766C324.473 150.953 323.254 154 322.723 157.906H344.426V157.062C344.176 153.25 343.16 150.375 341.379 148.438C339.598 146.469 337.129 145.484 333.973 145.484ZM381.849 137.281L382.177 143.141C385.927 138.609 390.849 136.344 396.943 136.344C407.505 136.344 412.88 142.391 413.068 154.484V188H401.677V155.141C401.677 151.922 400.974 149.547 399.568 148.016C398.193 146.453 395.927 145.672 392.771 145.672C388.177 145.672 384.755 147.75 382.505 151.906V188H371.114V137.281H381.849ZM445.709 124.953V137.281H454.663V145.719H445.709V174.031C445.709 175.969 446.084 177.375 446.834 178.25C447.616 179.094 448.991 179.516 450.959 179.516C452.272 179.516 453.6 179.359 454.944 179.047V187.859C452.35 188.578 449.85 188.938 447.444 188.938C438.694 188.938 434.319 184.109 434.319 174.453V145.719H425.975V137.281H434.319V124.953H445.709ZM500.851 183.031C497.508 186.969 492.758 188.938 486.601 188.938C481.101 188.938 476.929 187.328 474.086 184.109C471.273 180.891 469.867 176.234 469.867 170.141V137.281H481.258V170C481.258 176.438 483.929 179.656 489.273 179.656C494.804 179.656 498.539 177.672 500.476 173.703V137.281H511.867V188H501.133L500.851 183.031ZM556.743 147.688C555.243 147.438 553.696 147.312 552.103 147.312C546.884 147.312 543.368 149.312 541.556 153.312V188H530.165V137.281H541.04L541.321 142.953C544.071 138.547 547.884 136.344 552.759 136.344C554.384 136.344 555.728 136.562 556.79 137L556.743 147.688ZM592.057 188.938C584.838 188.938 578.979 186.672 574.479 182.141C570.01 177.578 567.776 171.516 567.776 163.953V162.547C567.776 157.484 568.744 152.969 570.682 149C572.651 145 575.401 141.891 578.932 139.672C582.463 137.453 586.401 136.344 590.744 136.344C597.651 136.344 602.979 138.547 606.729 142.953C610.51 147.359 612.401 153.594 612.401 161.656V166.25H579.26C579.604 170.438 580.994 173.75 583.432 176.188C585.901 178.625 588.994 179.844 592.713 179.844C597.932 179.844 602.182 177.734 605.463 173.516L611.604 179.375C609.573 182.406 606.854 184.766 603.448 186.453C600.073 188.109 596.276 188.938 592.057 188.938ZM590.698 145.484C587.573 145.484 585.041 146.578 583.104 148.766C581.198 150.953 579.979 154 579.448 157.906H601.151V157.062C600.901 153.25 599.885 150.375 598.104 148.438C596.323 146.469 593.854 145.484 590.698 145.484ZM654.558 147.688C653.058 147.438 651.511 147.312 649.918 147.312C644.699 147.312 641.183 149.312 639.371 153.312V188H627.98V137.281H638.855L639.136 142.953C641.886 138.547 645.699 136.344 650.574 136.344C652.199 136.344 653.543 136.562 654.605 137L654.558 147.688ZM680.544 167.891H670.747L669.669 119.75H681.669L680.544 167.891ZM669.341 182.609C669.341 180.828 669.919 179.359 671.075 178.203C672.231 177.016 673.809 176.422 675.809 176.422C677.809 176.422 679.388 177.016 680.544 178.203C681.7 179.359 682.278 180.828 682.278 182.609C682.278 184.328 681.716 185.766 680.591 186.922C679.466 188.078 677.872 188.656 675.809 188.656C673.747 188.656 672.153 188.078 671.028 186.922C669.903 185.766 669.341 184.328 669.341 182.609Z'
								fill={typographyBlack}
							/>
						</svg>
						<Typography color='textSecondary'>
							Cardigan kickstarter single-origin coffee chambray salvia taxidermy before they sold
							out meggings readymade post-ironic tacos.
						</Typography>
						<Button variant='contained' color='primary' size='large' style={{ margin: '44px 0' }}>
							Get Started
						</Button>
					</div>
				</div>
			</Container>
			<div
				style={{
					width: '100%',
					background: '#e4ebf5',
					padding: '5rem 0 4rem 0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Typography variant='h5' style={{ fontWeight: 'bold' }}>
					This is our motto. How cool?
				</Typography>
				<div
					style={{
						display: 'flex',
						flexDirection: width < 1200 ? 'column' : 'row',
						marginTop: '4rem',
					}}>
					<div
						style={{
							height: '15rem',
							width: '15rem',
							background: 'white',
							borderRadius: '1rem',
							margin: '2rem',
							padding: '1.5rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							textAlign: 'center',
						}}>
						<img src={Paper} style={{ height: '70px', width: '70px' }} alt='paper' />
						<Typography variant='h5'>Very Good</Typography>
						<Typography color='textSecondary'>
							Cardigan kickstarter single-origin coffee chambray salvia taxidermy before they sold
							out meggings readymade post-ironic tacos.
						</Typography>
					</div>
					<div
						style={{
							height: '15rem',
							width: '15rem',
							background: 'white',
							borderRadius: '1rem',
							margin: '2rem',
							padding: '1.5rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							textAlign: 'center',
						}}>
						<img src={Paper} style={{ height: '70px', width: '70px' }} alt='paper' />
						<Typography variant='h5'>Very Good</Typography>
						<Typography color='textSecondary'>
							Cardigan kickstarter single-origin coffee chambray salvia taxidermy before they sold
							out meggings readymade post-ironic tacos.
						</Typography>
					</div>
					<div
						style={{
							height: '15rem',
							width: '15rem',
							background: 'white',
							borderRadius: '1rem',
							margin: '2rem',
							padding: '1.5rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							textAlign: 'center',
						}}>
						<img src={Paper} style={{ height: '70px', width: '70px' }} alt='paper' />
						<Typography variant='h5'>Very Good</Typography>
						<Typography color='textSecondary'>
							Cardigan kickstarter single-origin coffee chambray salvia taxidermy before they sold
							out meggings readymade post-ironic tacos.
						</Typography>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;
