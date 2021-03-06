/*
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { onReady, onContent } from "@library/utility/appUtils";
import { suggestedTextStyleHelper } from "@library/features/search/suggestedTextStyles";
import { cssOut } from "@dashboard/compatibilityStyles";
cssOut(`.suggestedTextInput-option`, suggestedTextStyleHelper().option);

onReady(handleImageUploadInputDisplay);
onContent(handleImageUploadInputDisplay);

function handleImageUploadInputDisplay() {
    const imageUploadEnabled = document.getElementById("Form_ImageUpload-dot-Limits-dot-Enabled") as HTMLInputElement;

    if (imageUploadEnabled) {
        const displayClass = "dimensionsDisabled";
        const imageUploadDimensions = Array.from(document.getElementsByClassName("ImageUploadLimitsDimensions"));

        if (imageUploadEnabled.checked) {
            imageUploadDimensions.forEach(input => {
                input.classList.remove(displayClass);
            });
        }

        imageUploadEnabled.addEventListener("click", () => {
            if (imageUploadEnabled.checked) {
                imageUploadDimensions.forEach(input => {
                    input.classList.remove(displayClass);
                });
            } else {
                imageUploadDimensions.forEach(input => {
                    input.classList.add(displayClass);
                });
            }
        });
    }
}
