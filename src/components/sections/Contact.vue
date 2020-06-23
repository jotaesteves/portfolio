<template>
   <section id="contact">
        <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
            <b-input name="subject" expanded></b-input>
        </b-field>

        <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
        </b-field>

        <b-field horizontal label="Topic">
            <b-select placeholder="Select a topic">
                <option value="1">100€ - 400€</option>
                <option value="2">500€ - 1000€</option>
                <option value="3">2000€ - 10 000€</option>
            </b-select>
        </b-field>

        <b-field horizontal label="Message">
            <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary">
                  Send message
                </button>
            </p>
        </b-field>

    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>