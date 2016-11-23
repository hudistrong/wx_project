Page({
    data: {
        arr: [1,2,3],
        n:0,
        m:1,
        win: 0,
        lose: 0,
        hiddenModal: true,
        result_text: false,
        image_tag: ["4777971", "4777970", "4777969"],
        choose_color: "white"
    },
    getStart: function(eventTarget) {
        this.setData({choose_color: "lightblue"});
        var arr = [1,2,3];
        var m = eventTarget.currentTarget.dataset.hi;
        var n = Math.floor(Math.random() * arr.length + 1)-1;
        var win = this.data.win;
        var lose = this.data.lose;
        this.setData({n: n});
        this.setData({m: m});
        if(m!=arr[n]){
            if (m==1){
                if(arr[n]==3){
                    this.setData({hiddenModal: false, result_text: false, lose: lose+1})
                }else if(arr[n]==2){
                    this.setData({hiddenModal: false, result_text: true, win: win+1})
                }
            }else if (m==2){
                if(arr[n]==1){
                    this.setData({hiddenModal: false, result_text: false, lose: lose+1})
                }else if(arr[n]==3){
                    this.setData({hiddenModal: false, result_text: true, win: win+1})
                }
            }else if (m==3){
                if(arr[n]==2){
                    this.setData({hiddenModal: false, result_text: false, lose: lose+1})
                }else if(arr[n]==1){
                    this.setData({hiddenModal: false, result_text: true, win: win+1})
                }
            }
        }
        this.setData({choose_color: "white"});
    },
    listenerButton:function(){
        this.setData({
            hiddenModal: !this.data.hiddenModal
        })
    },
    listenerConfirm:function() {
        this.setData({
            hiddenModal: true
        })
    },
    listenerCancel:function() {
        this.setData({
            hiddenModal: true
        })
    },
});
