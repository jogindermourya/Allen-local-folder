
<!-- #Include virtual="/kota/include/header.asp" -->


<link rel="stylesheet" href="/assets/vendors/data-table/css/datatables.min.css">

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Scholarship Rules</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/kota/">Home</a></li>
				<li>Scholarship Rules</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->

<!-- #Include virtual="/common/scholarship-rule/scholarship-rules.asp" -->

<!--Footer-->
<!-- #Include virtual="/kota/include/footer.asp" -->
<!--/Footer-->
<script type="text/javascript">
	
	$(document).ready(function () {
		var schollership = kota_schollership;
		scholarshipRule(schollership, $);

		var information = kota_information;
		importantInformation(information, $);

		var doc = kota_documents;
		documentRequired(doc, $);
	});
	
</script>