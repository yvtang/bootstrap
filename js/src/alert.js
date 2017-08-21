import Data from './dom/data'
import EventHandler from './dom/eventHandler'
import SelectorEngine from './dom/selectorEngine'
import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME                = 'alert'
const VERSION             = '4.1.3'
const DATA_KEY            = 'bs.alert'
const EVENT_KEY           = `.${DATA_KEY}`
const DATA_API_KEY        = '.data-api'
const JQUERY_NO_CONFLICT  = $.fn[NAME]

const Selector = {
  DISMISS : '[data-dismiss="alert"]'
}

const Event = {
  CLOSE          : `close${EVENT_KEY}`,
  CLOSED         : `closed${EVENT_KEY}`,
  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
}

const ClassName = {
  ALERT : 'alert',
  FADE  : 'fade',
  SHOW  : 'show'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Alert {
  constructor(element) {
    this._element = element
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  // Public

  close(element) {
    let rootElement = this._element
    if (element) {
      rootElement = this._getRootElement(element)
    }

    const customEvent = this._triggerCloseEvent(rootElement)

    if (customEvent.isDefaultPrevented()) {
      return
    }

    this._removeElement(rootElement)
  }

  dispose() {
    $.removeData(this._element, DATA_KEY)
    this._element = null
  }

  // Private

<<<<<<< HEAD
  _getRootElement(element) {
    const selector = Util.getSelectorFromElement(element)
    let parent     = false
=======
      if (customEvent.defaultPrevented) {
        return
      }
>>>>>>> alert without jquery

    if (selector) {
      parent = document.querySelector(selector)
    }

<<<<<<< HEAD
    if (!parent) {
      parent = $(element).closest(`.${ClassName.ALERT}`)[0]
=======
    dispose() {
      Data.removeData(this._element, DATA_KEY)
      this._element = null
>>>>>>> alert without jquery
    }

    return parent
  }

  _triggerCloseEvent(element) {
    const closeEvent = $.Event(Event.CLOSE)

<<<<<<< HEAD
    $(element).trigger(closeEvent)
    return closeEvent
  }

  _removeElement(element) {
    $(element).removeClass(ClassName.SHOW)
=======
      if (selector) {
        const tmpSelected = SelectorEngine.find(selector)
        parent = tmpSelected[0]
      }

      if (!parent) {
        parent = SelectorEngine.closest(element, `.${ClassName.ALERT}`)
      }
>>>>>>> alert without jquery

    if (!$(element).hasClass(ClassName.FADE)) {
      this._destroyElement(element)
      return
    }

<<<<<<< HEAD
    const transitionDuration = Util.getTransitionDurationFromElement(element)

    $(element)
      .one(Util.TRANSITION_END, (event) => this._destroyElement(element, event))

    Util.emulateTransitionEnd(transitionDuration)
  }
=======
    _triggerCloseEvent(element) {
      return EventHandler.trigger(element, Event.CLOSE)
    }

    _removeElement(element) {
      element.classList.remove(ClassName.SHOW)

      if (!Util.supportsTransitionEnd() ||
          !element.classList.contains(ClassName.FADE)) {
        this._destroyElement(element)
        return
      }
>>>>>>> alert without jquery

  _destroyElement(element) {
    $(element)
      .detach()
      .trigger(Event.CLOSED)
      .remove()
  }

<<<<<<< HEAD
  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data       = $element.data(DATA_KEY)
=======
      EventHandler
        .one(element, Util.TRANSITION_END, (event) => this._destroyElement(element, event))
      Util.emulateTransitionEnd(element, transitionDuration)
    }

    _destroyElement(element) {
      EventHandler.trigger(element, Event.CLOSED)
      element.parentNode.removeChild(element)
    }
>>>>>>> alert without jquery

      if (!data) {
        data = new Alert(this)
        $element.data(DATA_KEY, data)
      }

<<<<<<< HEAD
      if (config === 'close') {
        data[config](this)
      }
    })
  }

  static _handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault()
      }
=======
    static _jQueryInterface(config) {
      return this.each(function () {
        let data = Data.getData(this, DATA_KEY)

        if (!data) {
          data = new Alert(this)
          Data.setData(this, DATA_KEY, data)
        }
>>>>>>> alert without jquery

      alertInstance.close(this)
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

$(document).on(
  Event.CLICK_DATA_API,
  Selector.DISMISS,
  Alert._handleDismiss(new Alert())
)

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME]             = Alert._jQueryInterface
$.fn[NAME].Constructor = Alert
$.fn[NAME].noConflict  = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Alert._jQueryInterface
}

export default Alert
