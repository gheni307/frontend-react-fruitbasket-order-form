import React from "react";
import {useForm} from "react-hook-form";
import './formulier.css';

function Formulier() {
    const {handleSubmit, formState: {errors}, register} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (<form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="details-forName">
                    Voornaam:
                    <input
                        type="text"
                        {...register("forName", {
                            required: "Hier is verplicht", minLength: {
                                value: 3, message: "Voor naam moet minimaal 3 karakters bevatten"
                            },
                        })}
                    />
                    {errors.forName && <p>{errors.forName.message}</p>}
                </label>

                <label htmlFor="details-afterName">
                    Achternaame:
                    <input
                        type="text"
                        {...register("afterName", {
                            required: "Hier is verplicht", minLength: {
                                value: 3, message: "Achter naam moet minimaal 3 karakters bevatten",
                            }
                        })}
                    />
                    {errors.afterName && <p>{errors.afterName.message}</p>}

                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        {...register("age", {
                            required: "Hier is verplicht", max: {
                                value: 70, message: "kandidaat kan niet ouder dan 70 jaar",
                            }
                        })}
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>

                <label htmlFor="details-zipCode">
                    Postcode:
                    <input
                        type="text"
                        {...register("zipCode", {
                            required: "Hier is verplicht"
                        })}
                    />
                    {errors.zipCode && <p>{errors.zipCode.message}</p>}
                </label>

                <label htmlFor="optie">
                    Bezorgfrequentie:
                    <br/>
                    <select {...register("optie")}>
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>
                    </select>
                </label>
                <br/>
                <br/>
                <span>
                    <label htmlFor="Overdag">
                    Overdag:
                    <input
                        type="radio"
                        value="Overdag"
                        {...register("days")}
                    />
                    </label>

                    <label htmlFor="`s Avonds">
                        `s Avonds:
                        <input
                            type="radio"
                            value="`s Avonds"
                            {...register("days")}
                        />
                    </label>
                </span>

                <label htmlFor="review">
                    Opmerking
                    <br/>
                    <textarea
                        rows="4"
                        cols="40"
                        placeholder="wat is you opmerking?"
                        {...register("review", {
                            maxLength: {
                                value: 70, message: "karakters mag niet langer dan 70"
                            }
                        })}
                    ></textarea>
                    {errors.review && <p>{errors.review.message}</p>}
                </label>

                <label htmlFor="requirements" id="checkbox">
                    <input
                        type="checkbox"
                        {...register("requirements", {
                            required: "het is verplicht"
                        })}
                    />
                    Ik ga akkoord met de voorwaarden
                    {errors.requirements && <p>{errors.requirements.message}</p>}
                </label>
                <input type="submit" value="submit"/>
            </fieldset>
        </form>
    )
}

export default Formulier;
