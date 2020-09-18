
<!--#include virtual="/pncf/bhilwara/include/header.asp"-->


<link rel="stylesheet" href="/assets/vendors/data-table/css/datatables.min.css">

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Scholarship Rules</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/pncf/bhilwara/">Home</a></li>
				<li>Scholarship Rules</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->

<!-- #Include virtual="/pncf/common/scholarship-rule/scholarship-rules.asp" -->

<!--Footer-->
<!--#include virtual="/pncf/bhilwara/include/footer.asp"-->
<!--/Footer-->

<script type="text/javascript">
	
	$(document).ready(function () {
		var schollership = bhilwara_pncf_schollership;
		scholarshipRule(schollership, $);

		var information = bhilwara_pncf_information;
		importantInformation(information, $);

		var doc = bhilwara_pncf_documents;
		documentRequired(doc, $);
	});
	
</script>
