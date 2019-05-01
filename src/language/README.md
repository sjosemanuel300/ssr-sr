
# Documentation for Translations on OnDemand-Builder


Links for thoughs and ideas

> https://help.shopify.com/themes/development/theme-store-requirements/internationalizing/grouping-translation-keys
> https://github.com/jcbvm/i18n-editor/blob/master/src/main/resources/bundles/messages.properties


We use a 2 levels structure for the json translations keys:

	1st-level.2nd-level


* 1st level: screen/view/higher component.

* 2nd level: All the childrens of the first view/component. These are a group of related translations under a top-level component. First comes the component where it lives, followed by an underscore and then your name for that translator variable.

	register.input_lastName

## Examples:

	> register.h1_title => "Empecemos"
	> register.input_placeholder_lastName => "Apellidos"


# ####################################################
# ####################################################

Hay dos formas de usarlo:
	-si el componente tiene un mapStateToProps puedes incluirlo en ese json
		{
			....tus variables,
			json_lang: state.clientReducer.json_lang
		}

		....componente
		let json_lang = this.props.json_lang;
			<p>{json_lang.common.waiting_message}</p>

		ó

		....componente
			<p>{this.props.json_lang.common.waiting_message}</p>


	-si no lo tiene puedes importar el store y asignarle a una variable local para que sea menos "ruidoso" (largo pa escribir pss)

		import store from "TU-SABES-DONDE/store"

		var json_lang = store.getStore().json_lang;

		....componente
			<p>{json_lang.common.waiting_message}</p>

