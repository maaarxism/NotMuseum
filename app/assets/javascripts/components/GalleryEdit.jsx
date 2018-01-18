class GalleryEdit extends React.Component {
  renderGalleryItems(item) {
    let elements = []

    let galleryItems = JSON.parse(this.props.galleryItems)

    galleryItems.forEach(function(item, index) {
      elements.push(
        <div className="galleryItem galleryAnnotation" id="gallery_item_{ item.id }" key={ index }>
          <div className="content">
            <div className="handle"></div>
            <p>{ item.body }</p>
          </div>
        </div>
      )
    })

    return elements
  }


  render() {
    let styles = {
      backgroundColor: '#' + this.props.background
    }

    return (
      <section className="galleryWrapper" style={ styles }>
        <header>
          <h1>
            {this.props.title}
          </h1>
        </header>

        <section className="galleryContainer">
          <div className="galleryZeroAnnotation">
            <div className="separator"></div>
          </div>

            { this.renderGalleryItems() }
        </section>
      </section>
    )
  }
}
