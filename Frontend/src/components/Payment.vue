<template>
    <div class="payment">
        <h1>This is a payment page</h1>
        <div class="payment-details">
            <h2 class="payment-location"></h2>
            <h3 class="payment-price">Start at : {{ formatDate(payment.start) }}</h3>
            <button @click="payPlace">Go to Payment</button>
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>