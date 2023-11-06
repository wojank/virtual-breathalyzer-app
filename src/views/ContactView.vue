<script setup lang="ts"></script>
<template>
	<div class="c">
		<!-- alignment nie jest idealny -->
		<div class="c__one">
			<span class="contact__subtitle">jeśli masz jakieś pytania</span>
			<h1 class="contact__title">Skontaktuj się z nami</h1>
			<p class="contact__description">
				Chcielibyśmy poznać Twoje pytania i pomóc Ci jak najlepiej możemy.
				Wypełnij nasz formularz kontaktowy, a nasi eksperci odpowiedzą na Twoje
				pytania oraz udzielą Ci wszelkiej potrzebnej pomocy.
			</p>
			<address>
				<div class="c__addres-item">
					<font-awesome-icon icon="fa-solid fa-envelope" class="c__icona" />
					<a class="c__links" href="mailto:adres@email.com">adres@email.com</a>
				</div>
				<div class="c__addres-item">
					<font-awesome-icon icon="fa-solid fa-phone" class="c__icona" />
					<a class="c__links" href="tel:+48-123-456-789"> +48 123 456 789</a>
				</div>

				<div class="c__addres-item">
					<font-awesome-icon icon="fa-solid fa-house" class="c__icona" />
					<p class="c__address">ul. Kazimierza Wielkiego 64/2 30-221 Poznań</p>
				</div>
			</address>
		</div>
		<div class="c__two">
			<form action="">
				<div class="c__form">
					<input class="c__input" type="text" placeholder="wpisz swoje imię" />
					<input class="c__input" type="text" placeholder="adres email" />
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="napisz do nas, a my chętnie udzielimy wszelkiej pomocy"
						class="c__text"
					></textarea>
					<div class="c__radios">
						<span class="c__case">sprawa, która mnie interesuje:</span>
						<div class="c__r-item">
							<input type="radio" id="pytanie" name="wybór" />
							<label class="c__r-label" for="pytanie">pytanie</label>
						</div>
						<div class="c__r-item">
							<input type="radio" id="współpraca" name="wybór" />
							<label class="c__r-label" for="współpraca">współpraca</label>
						</div>
						<div class="c__r-item">
							<input type="radio" id="inne" name="wybór" />
							<label class="c__r-label" for="inne">inne</label>
						</div>
					</div>
					<button class="c__btn">Wyślij</button>
				</div>
			</form>
		</div>
	</div>
</template>
<style>
@import '../assets/scss/views/contact-view.scss';
</style>
