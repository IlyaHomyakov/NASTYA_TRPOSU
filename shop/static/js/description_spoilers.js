descpritionSpoiler = document.getElementById('coat-description-spoiler-header')
coatDescriptionSpoilerBody = document.getElementById('coat-description-spoiler-body')
openCoatDescriptionSpoiler = document.getElementById('open-coat-description-spoiler')

descpritionSpoiler.onclick = e => {
    if (coatDescriptionSpoilerBody.classList.contains('hidden-spoiler')) {
        coatDescriptionSpoilerBody.classList.remove('hidden-spoiler')
        openCoatDescriptionSpoiler.innerHTML = '–'
    } else {
        coatDescriptionSpoilerBody.classList.add('hidden-spoiler')
        openCoatDescriptionSpoiler.innerHTML = '+'
    }
}

compositionSpoiler = document.getElementById('coat-composition-spoiler-header')
coatCompositionSpoilerBody = document.getElementById('coat-composition-spoiler-body')
openCoatCompositionSpoiler = document.getElementById('open-coat-composition-spoiler')

compositionSpoiler.onclick = e => {
    if (coatCompositionSpoilerBody.classList.contains('hidden-spoiler')) {
        coatCompositionSpoilerBody.classList.remove('hidden-spoiler')
        openCoatCompositionSpoiler.innerHTML = '–'
    } else {
        coatCompositionSpoilerBody.classList.add('hidden-spoiler')
        openCoatCompositionSpoiler.innerHTML = '+'
    }
}

