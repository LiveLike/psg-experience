class CustomTextAsk extends LiveLikeTextAsk {

    render() {
      return html`
        <template>
         
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <livelike-title></livelike-title>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                    <form>
                                        <div style="border: 1.7px solid #FFFFFF;
                                        display:flex;
                                        align-items:center;
                                        border-radius: 5px;
                                        margin:4px 12px 14px 12px">
                                            <textarea  
                                                class="text-ask-input"
                                                type="text"
                                                name="reply"
                                                rows="1"
                                                .value = ${this.text}
                                                maxlength="${this.maxlength}"
                                                placeholder=${this.prompt}
                                                @input=${this.inputHandler}
                                            ></textarea>
                                            <img 
                                            @click=${this.submitReply}
                                            style="height: 16px; width:16px; margin-right:10px;" src="./images/send.svg"></img>
                                        
                                            
                                        </div>
                                    </form>
                            
                                <div style="
                                    color: white;
                                    font-size: 11px;
                                    font-weight: 400;
                                    font-family: 'PSGFont';
                                    margin: 4px 12px 4px 14px;" class="${!this.showConfirmation ? 'hidden' : ''}">
                                    <span>${this.confirmation_message}</span>
                                </div>
                                    </div>

                        </div>
                </div>
            </div
        </template>
      `;
    }
  }
  customElements.define("custom-text-ask", CustomTextAsk);
  
  const customWidgetRenderer = (args) => {
    let widgetPayload = args.widgetPayload;
    if( widgetPayload.kind === 'text-ask'){
      return document.createElement('custom-text-ask');
    }
  }
