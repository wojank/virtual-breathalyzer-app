<script setup lang="ts"></script>
<template>
	<main class="contact">
		<section class="text">
			<h1 class="text__title">Skontaktuj się z nami</h1>
			<h2 class="text__subtitle">jeśli masz jakieś pytania</h2>
			<p class="text__paragraph">
				Chcielibyśmy poznać Twoje pytania i pomóc Ci jak najlepiej możemy.
				Wypełnij nasz formularz kontaktowy, a nasi eksperci odpowiedzą na Twoje
				pytania oraz udzielą Ci wszelkiej potrzebnej pomocy.
			</p>
			<address class="address">
				<div class="address__item">
					<font-awesome-icon
						icon="fa-solid fa-envelope"
						class="address__icon"
					/>
					<a class="address__link" href="mailto:adres@email.com"
						>adres@email.com</a
					>
				</div>
				<div class="address__item">
					<font-awesome-icon icon="fa-solid fa-phone" class="address__icon" />
					<a class="address__link" href="tel:+48-123-456-789">
						+48 123 456 789</a
					>
				</div>

				<div class="address__item">
					<font-awesome-icon
						icon="fa-solid fa-house"
						class="c__icona address__icon"
					/>
					<p class="address__address">
						ul. Kazimierza Wielkiego 64/2 30-221 Poznań
					</p>
				</div>
			</address>
		</section>
		<section class="form">
			<form class="form__form">
				<input class="form__input" type="text" placeholder="wpisz swoje imię" />
				<input class="form__input" type="text" placeholder="adres email" />
				<textarea
					cols="30"
					rows="10"
					placeholder="napisz do nas, a my chętnie udzielimy wszelkiej pomocy"
					class="form__textarea"
				></textarea>
				<div class="form__radios">
					<span class="form__case">sprawa, która mnie interesuje:</span>
					<div class="form__r-item">
						<input type="radio" id="pytanie" name="wybór" />
						<label class="form__label" for="pytanie">pytanie</label>
					</div>
					<div class="form__r-item">
						<input type="radio" id="współpraca" name="wybór" />
						<label class="form__label" for="współpraca">współpraca</label>
					</div>
					<div class="form__r-item">
						<input type="radio" id="inne" name="wybór" />
						<label class="form__label" for="inne">inne</label>
					</div>
				</div>
				<button class="form__btn">Wyślij</button>
			</form>
		</section>
	</main>
</template>
<style scoped>
@import '../assets/scss/views/view-contact.scss';
</style>
