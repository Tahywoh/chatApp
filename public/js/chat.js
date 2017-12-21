var socket = io()

function scrollToButtom () {
  // Selectors
  var messages = $('#messages')
  var newMessage = messages.children('li:last-child')
  //height

  var clientHeight = messages.prop('clientHeight')
  var scrollTop = messages.prop('scrollTop')
  var scrollHeight = messages.prop('scrollHeight')
  var newMessageHeight = newMessage.innerHeight()
  var lastMessageHeight = newMessage.prev().innerHeight()

  if (clientHeight + scrollTop  + newMessageHeight + lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight)
  }
}

socket.on('connect', function () {
  // console.log('connected to server') 
  var params = $.deparam(window.location.search)

  socket.emit('join', params, function (err) {
    if (err) {
      alert(err)
      window.location.href = '/'
    } else {
      console.log('No error')
    }
  })
})

socket.on('disconnect', function () {
  console.log('Disconected from server')
})

socket.on('updateUserList', function (users) {
  // console.log('Users list', users)
  var ol = $('<ol></ol>')
  users.forEach(function (user) {
    ol.append($('<li></li>').text(user))
  })

  $('#users').html(ol)
})

socket.on('newMessage', (message) => {
  var formatedTime = moment(message.createdAt).format('h:mm a')
  var template = $('#message-template').html()

  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formatedTime
  })

  $('#messages').append(html)
  scrollToButtom()

})

socket.on('newLocationMessage', function (message) {
  var formatedTime = moment(message.createdAt).format('h:mm a')
  var template = $('#location-message-template')
  var html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formatedTime
  })

  $('#messages').append(html)
  scrollToButtom()

})

$('#message-form').on('submit', function(e) {
  e.preventDefault()

  var messageTextbox = $('[name=message]')

  socket.emit('createMessage', {
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('')
  })
})
 
let locationButton = $('#send-location')
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser')
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...')

  navigator.geolocation.getCurrentPosition(function (position) {
// console.log(position)
locationButton.removeAttr('disabled').text('Send Location')
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function () {
    locationButton.removeAttr('disabled').text('Send Location')
    alert('Unable to fetch location')
  })
})