<template>
	<div class="Container">
		<div class="Header">
			<div class="Items">
				<a href="https://www.cornee.se/"><img class="Logo" src="../assets/Logo.svg" alt="Logo"></a>
				<h2 class="TitleFont">Curriculum Vitae</h2>
				<a href="./CV.pdf" download=""><download-icon class="Icon"/></a>
			</div>
		</div>
		<div class="PdfContainer">
			<pdf src="./CV.pdf" :page="1" resize="true" style="width: 100%"></pdf>
		</div>
	</div>
</template>

<script>

import pdf from "pdfvuer";
import { DownloadIcon } from "@zhuowenli/vue-feather-icons"

export default {
	name: "CV",
	components: {
		pdf,
		DownloadIcon
	}
}

</script>

<style scoped>

	.Container {
		background-color: var(--PrimaryBackground);
		box-sizing: border-box;
		height: 100%;
	}

	.Header {
		width: 100%;
		height: 80px;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 2;
		background-color: var(--SecondaryBackground);
		margin-bottom: 2.5%;
		box-shadow: 0 10px 10px 5px var(--DropShadow);
	}

	.Items {
		max-width: 850px;
		padding: 0 10px;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	@media screen and (max-width: 1100px) {
		.Items {
			justify-content: space-around;
		}
	}

	.Logo {
		width: 50px;
	}
	svg {
		height: 30px;
		width: 30px;
		color: var(--PrimaryColor);
	}
	svg:hover {
		color: var(--Text);
		cursor: pointer;
	}

	.PdfContainer {
		display: flex;
		justify-content: center;
		padding: 2.5% 5%;
		overflow-y: auto;
	}
	.PdfContainer div {
		max-width: 1100px;
	}

</style>