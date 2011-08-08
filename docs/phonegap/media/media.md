Media
=====

> The `Media` object provides the ability to record and play back audio files on a device. 

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


Note: The current implementation does not adhere to a W3C specification for media capture, and is provided for convenience only.  A future implementation will adhere to the latest W3C specification and may deprecate the current APIs.

Parameters
----------

- __src__: A URI containing the audio content. _(DOMString)_
- __mediaSuccess__: (Optional) The callback that is invoked after a Media object has completed the current play/record or stop action. _(Function)_
- __mediaError__: (Optional) The callback that is invoked if there was an error. _(Function)_
- __mediaStatus__: (Optional) The callback that is invoked to indicate status changes. _(Function)_

Methods
-------

- media.getCurrentPosition: Returns the current position within an audio file.
- media.getDuration: Returns the duration of an audio file.
- media.play: Start or resume playing audio file.
- media.pause: Pause playing audio file.
- media.release: Releases the underlying OS'es audio resources.
- media.seekTo: Moves the position within the audio file.
- media.startRecord: Start recording audio file.
- media.stopRecord: Stop recording audio file.
- media.stop: Stop playing audio file.

Additional ReadOnly Parameters
---------------------

- ___position__: The position within the audio playback in seconds.  Not automatically updated during play, call getCurrentPosition to update.
- ___duration__: The duration of the media in seconds.

Supported Platforms
-------------------

- Android
- iOS

