
<!-- #Include virtual="/kota/include/header.asp" -->


<link rel="stylesheet" href="/assets/vendors/data-table/css/datatables.min.css">

<!-- Breadcrumb Section -->
<section class="breadcrumb_area">
	<img class="breadcrumb_shap" src="/assets/img/aboutus/innerbghead.png" alt="">
	<div class="container">
		<div class="breadcrumb_content text-center">
			<h1 class="breadcrumb-hed">Refund Rules</h1>
			<ul class="list-unstyled breadcrumb-links m-0">
				<li><a href="/kota/">Home</a></li>
				<li>Refund Rules</li>
			</ul>
		</div>
	</div>
</section>
<!-- End Breadcrumb Section -->
<!-- #Include virtual="common/refund-rule/refund-rules.asp" -->

<!--Footer-->
<!-- #Include virtual="/kota/include/footer.asp" -->
<!--/Footer-->

<script type="text/javascript">
	
	$(document).ready(function () {
		var refund = kota_refundProcess;
		refundProcess(refund, $);

		var sprefund = kota_specialRefund;
		specialRefund(sprefund, $);

		var important = kota_importantPoints;
		importantPoints(important, $);

		var rules = kota_refundRules;
		refundRules(rules, $);

		var service = kota_changes;
		changes(service, $);
	});
	
</script>